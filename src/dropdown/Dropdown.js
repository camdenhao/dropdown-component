import React, { useEffect, useState, useRef } from 'react';
import './dropdown.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

function Dropdown({placeholder, options, multiSelect, onChange, searchable, selectedStyling, menuStyling}){
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(multiSelect ? [] : null);
    const [filteredItems, setFilteredItems] = useState(options);

    const inputRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if(inputRef.current && !inputRef.current.contains(e.target)){
                setFilteredItems(options);
                setMenuVisible(false);
            }
        }

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    })

    const getSelected = () => {
        if(!selectedItem  || selectedItem.length === 0) return placeholder;

        if (multiSelect){
            return(
                <div className="dropdown-tags">
                    {selectedItem.map((option) => (
                    <div key={option.value} className="dropdown-tag-item">
                        {option.label}
                        <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close">
                            <AiOutlineClose style={{color: 'white'}}/>
                        </span>
                    </div>
                ))}
                </div>
            )
        }

        return selectedItem.label;
    }

    const removeOption = (option) => {
        const filtered = selectedItem.filter((op) => op.value !== option.value);
        onChange(filtered);
        return filtered;
    }

    const onTagRemove = (e, option) => {
        e.stopPropagation();
        setSelectedItem(removeOption(option));
    }

    const handleMenuClick = (e) => {
        setMenuVisible(!menuVisible);
    }

    const isSelected = (option) => {
        if(multiSelect){
            return selectedItem.filter((op) => op.value === option.value).length > 0;
        }
        return selectedItem?.value === option.value;
    }

    const onItemClick = (option) => {
        let newValue; 
        if (multiSelect){
            if (selectedItem.findIndex((o) => o.value === option.value) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedItem, option];
            }
        } else {
            newValue = option;
        }
        setSelectedItem(newValue);
        onChange(newValue);
    }

    const handleAll = () => {
        if(selectedItem.length > 0){
            setSelectedItem([]);
            onChange([]);
        }
        else{
            setSelectedItem([...filteredItems]);
            onChange([...filteredItems]);
        }
    }

    const handleSearchText = (event) => {
        setFilteredItems(options.filter((option) => option.label.toLowerCase().indexOf(event.target.value) !== -1));
    }

    return(
        <div ref={inputRef} className="dropdown-container">
            <div className="dropdown-selected" onClick={handleMenuClick} style={selectedStyling}>
                {getSelected()} 
                <div  className="menu-toggle-icon">
                    {menuVisible ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>
            {menuVisible && 
            <div>
                {searchable && <input className="search-bar" placeholder="Search" onChange={(e) => handleSearchText(e)}/>}
                <div className="dropdown-menu" style={menuStyling}>
                {multiSelect &&  <div onClick={() => handleAll()} className="dropdown-item">{selectedItem.length > 0 ? "Deselect all" : "Select all"}</div>}
                {filteredItems.map(option => (
                    <div onClick={() => onItemClick(option)} key={option.value} className={`dropdown-item ${isSelected(option) && 'selected'}`}>{option.label}</div>
                    ))}
                </div>
            </div>}
        </div>
    );
}

export default Dropdown;