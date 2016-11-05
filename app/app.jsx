var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components

// Load Foundation
$(document).foundation();

// Load Custom Styles
require('style!css!sass!applicationStyles');

require('./redux-example.jsx');
//require('./redux-todo-example.jsx');
