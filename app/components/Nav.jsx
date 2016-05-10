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

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('will wire up later');
  },
  render: function(){
    return (
      <nav className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Current Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About Us</Link></li>
            <li><Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </nav>
    );
  }
});
  


module.exports = Nav;

/*var old = (
  <nav>
    <h2>I am a nav</h2>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Current Weather</IndexLink>
    <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About Us</Link>
    <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
  </nav>
);*/