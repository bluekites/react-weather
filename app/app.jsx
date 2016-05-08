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

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}> 
      <Route path="example" component={Example} />
      <Route path="about" component={About} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>, 
  document.getElementById('app'));

//1 load in everything from the react router module using es6 syntax
//2 set the route in the ReactDOM.render and then start making individual routes
//3 create our root path to route to the Main component (using {} to pass in the javascript expression)
//4 add the alias to our webpack configuration
//5 create the Nav component and load it to Main
//6 create a Weather component and load it to the main app.jsx for routing
//7 put the Weather component into the IndexRoute
//8 now using this.props.children in Main will give us the Weather component
//9 make an about component to render the about page
//10 create route for the About component using Route and it will also be rendered as this.props.children in the Main component
//11 create links by importing the Link function via the react-router module inside of the Nav component
//12 add activeClassName to the links. change the link for Weather to IndexLink(need to pull from react-router) because it is matched with an IndexRoute