var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Nav />
        <h1>I'm the main component</h1>
      </div>
    );
  }
});

module.exports = Main;