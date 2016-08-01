var redux = require('redux');

console.log('Starting redux todo example...');

var stateDefault = {
  todos: [],
  showCompleted: false,
  searchText: ''
};

var reducer = (state = stateDefault, action) => {
  return state;
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());
