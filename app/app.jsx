var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// that was es6 syntax, this is how we used to write it
// var Route = require('react-router').Route;
// var Router = require('react-router').Router; and etc
// this is called object destructuring
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// load custom css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}> 
      <Route path="example" component={Example} />
      <Route path="about" component={About} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>, 
  document.getElementById('app')
);

