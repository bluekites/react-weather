var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// that was es6 syntax, this is how we used to write it
// var Route = require('react-router').Route;
// var Router = require('react-router').Router; and etc
// this is called object destructuring
var Main = require('Main');
var Weather = require('Weather');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}> 
      <IndexRoute component={Weather} />
    </Route>
  </Router>, 
  document.getElementById('app'));

//1 load in everything from the react router module using es6 syntax
//2 set the route in the ReactDOM.render and then start making individual routes
//3 create our root path to route to the Main component
//4 add the alias to our webpack configuration
//5 create the Nav component and load it to Main
//6 create a Weather component and load it to the main app.jsx for routing
//7 put the Weather component into the IndexRoute
//8 now using this.props.children in Main will give us the Weather component