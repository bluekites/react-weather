var React = require('react');
var {Link, IndexLink} = require('react-router');

/*var Nav = React.createClass({
  render: function(){
    return (
      <nav>
        <h2>I am a nav</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Current Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About Us</Link>
        <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
      </nav>
    );
  }
});*/

var Nav = (props) => {
  return (
    <nav>
      <h2>I am a nav</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Current Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About Us</Link>
      <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
    </nav>
  );
}

module.exports = Nav;