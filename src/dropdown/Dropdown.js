import React, { useEffect, useState, useRef } from 'react';
import './dropdown.css';

function Dropdown({placeholder, options, multiSelect, onChange}){
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(multiSelect ? [] : null);
    const inputRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if(inputRef.current && !inputRef.current.contains(e.target)){
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
                        <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close">x</span>
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
        e.stopPropagation();
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

    return(
        <div ref={inputRef} className="dropdown-container" >
            <div className="dropdown-selected" onClick={handleMenuClick}>{getSelected()}</div>
            {menuVisible && <div className="dropdown-menu">
                {options.map(option => (
                    <div onClick={() => onItemClick(option)} key={option.value} className={`dropdown-item ${isSelected(option) && 'selected'}`}>{option.label}</div>
                ))}
            </div>}
        </div>
    );
}

export default Dropdown;