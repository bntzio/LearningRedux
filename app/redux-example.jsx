var redux = require('redux');

console.log('Starting redux example...');

// Default state
var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

// Action identifiers
var nextHobbyId = 1;
var nextMovieId = 1;

// Reducer
var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
      ...state,
      name: action.name
    };
  case 'ADD_HOBBY':
    return {
      ...state,
      hobbies: [...state.hobbies,
        {
          id: nextHobbyId++,
          hobby: action.hobby 
        }
      ]
    };
  case 'ADD_MOVIE':
    return {
      ...state,
      movies: [...state.movies,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ]
    };
  case 'REMOVE_HOBBY':
    return {
      ...state,
      hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
    };
  case 'REMOVE_MOVIE':
    return {
      ...state,
      movies: state.movies.filter((movie) => movie.id !== action.id)
    };
  default:
    return state;
  };
};

// Store
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

// Actions
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Enrique'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Gym'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Coding'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'The Social Network',
  genre: 'Drama'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Harry Potter',
  genre: 'Fantasy'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Scream',
  genre: 'Terror'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Henry'
});
