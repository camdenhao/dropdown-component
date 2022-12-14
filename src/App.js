import Dropdown from './dropdown/Dropdown';
import './App.css';

const options = [{
  value: 'option 1',
  label: 'Option 1',
}, {
  value: 'option 2',
  label: 'Option 2'
},
{
  value: 'option 3',
  label: 'Option 3',
}, {
  value: 'option 4',
  label: 'Option 4'
},
{
  value: 'option 5',
  label: 'Option 5',
}, {
  value: 'option 6',
  label: 'Option 6'
},
{
  value: 'option 7',
  label: 'Option 7',
}, {
  value: 'option 8',
  label: 'Option 8'
}];


function App() {
  return (
    <div className="App">
        <p className="title">
          Hive Frontend Engineer Challenge
        </p>
        <p>Hi! Here is my submission for Hive's frontend engineer challenge. Each dropdown menu supports the following props:</p>
        <ul>
          <li>placeholder: placeholder text for when no option from the dropdown is selected</li>
          <li>options: a list of options for the drop down. Each option must be an object with 2 required fields: "value" and "label"</li>
          <li>multiSelect: set to true to enable multiple selection. Defaults to single selection</li>
          <li>onChange: callback function for when the selected items change. For this demo the selected value gets printed to the console. For single select, returns the selected object. For multi, an array of objects</li>
          <li>selectedStyling: an object of styling properties for the dropdown</li>
          <li>menuStyling: an object of syling properties for the menu of items when the dropdown is expanded</li>
        </ul>
        <div className="dropdowns">
          <div>
            <p>Single select:</p>
            <Dropdown placeholder='Select an option' 
            options={options} 
            selectedStyling={{height: 100, width: 300, color: '#4A8DB7'}} 
            menuStyling={{width: 300}}
            onChange={(value) => console.log(value)}
            />
          </div>
          <div>
          <p>Multi select:</p>
            <Dropdown placeholder='Select options' 
            options={options} 
            multiSelect 
            menuStyling={{maxHeight: 100}}
            onChange={(value) => console.log(value)}
            />
          </div>
        </div>
        
    </div>
  );
}

export default App;
