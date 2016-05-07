var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function(){
    return (
      <nav>
        <h2>I am a nav</h2>
        <Link to="/">Current Weather</Link>
        <Link to="/about">About Us</Link>
        <Link to="/example">Example</Link>
      </nav>
    );
  }
});

module.exports = Nav;