var redux = require('redux');

console.log('Starting redux example...');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View your location</a>';
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Enrique'));
store.dispatch(actions.addHobby('Gym'));
store.dispatch(actions.addHobby('Coding'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie('The Social Network', 'Drama'));
store.dispatch(actions.removeMovie(1));
store.dispatch(actions.addMovie('Harry Potter', 'Fantasy'));
store.dispatch(actions.addMovie('Scream', 'Terror'));
store.dispatch(actions.changeName('Henry'));
