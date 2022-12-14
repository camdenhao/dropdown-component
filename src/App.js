import logo from './logo.svg';
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Dropdown placeholder='Select an option' options={options} multiSelect 
        onChange={(value) => console.log(value)}/>
        <Dropdown placeholder='Select...' options={options} onChange={() => {}}/>
    </div>
  );
}

export default App;
