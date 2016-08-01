var redux = require('redux');

console.log('Starting redux todo example...');

var stateDefault = {
  todos: [],
  showCompleted: false,
  searchText: ''
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
    };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);
console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
});
console.log('searchText should be dog', store.getState());
