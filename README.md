# Camden Hao Hive Frontend Engineer Challenge Submission

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To start the project:

run command `npm start` in the root directory. The demo will be up and running at `localhost:3000`. 

## Props supported: 

- placeholder: placeholder text for when no option from the dropdown is selected
- options: a list of options for the drop down. Each option must be an object with 2 required fields: "value" and "label"
- multiSelect: set to true to enable multiple selection. Defaults to single selection
- onChange: callback function for when the selected items change. For this demo the selected value gets printed to the console. For single select, returns the selected object. For multi, an array of objects
- searchable: when set to true, adds a search bar to search for dropdown items
- selectedStyling: an object of styling properties for the dropdown
- menuStyling: an object of syling properties for the menu of items when the dropdown is expanded

