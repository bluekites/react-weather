var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// that was es6 syntax, this is how we used to write it
// var Route = require('react-router').Route;
// var Router = require('react-router').Router; and etc
// this is called object destructuring
var Main = require('Main');



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}> 
    
    </Route>
  </Router>, 
  document.getElementById('app'));

//1 load in everything from the react router module using es6 syntax
//2 set the route in the ReactDOM.render and then start making individual routes
//3 create our root path to route to the Main component
//4 add the alias to our webpack configuration