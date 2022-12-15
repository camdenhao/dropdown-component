import Dropdown from './dropdown/Dropdown';
import './App.css';

const options = [{
  value: 'Chris Evans',
  label: 'Chris Evans',
}, {
  value: 'Robert Downey Jr.',
  label: 'Robert Downey Jr.'
},
{
  value: 'Chris Hemsworth',
  label: 'Chris Hemsworth',
}, {
  value: 'Mark Ruffalo',
  label: 'Mark Ruffalo'
},
{
  value: 'Scarlett Johansson',
  label: 'Scarlett Johansson',
}, {
  value: 'Jeremy Renner',
  label: 'Jeremy Renner'
},
{
  value: 'Tom Holland',
  label: 'Tom Holland',
}, {
  value: 'Elizabeth Olsen',
  label: 'Elizabeth Olsen'
}];


function App() {
  return (
    <div className="App">
        <p className="title">
          Hive Frontend Engineer Challenge
        </p>
        <p className="info">Hi! here is my submission for Hive's frontend engineer challenge!</p>
        <div className="dropdowns">
          <div>
            <p>Single select:</p>
            <Dropdown placeholder='Select an option' 
            options={options} 
            selectedStyling={{height: 100, width: 300, color: '#4A8DB7'}} 
            menuStyling={{width: 300, maxHeight: 'fit-content'}}
            onChange={(value) => console.log(value)}
            />
          </div>
          <div>
          <p>Multi select:</p>
            <Dropdown placeholder='Select options' 
            options={options} 
            multiSelect 
            searchable
            onChange={(value) => console.log(value)}
            />
          </div>
        </div>
        
    </div>
  );
}

export default App;
