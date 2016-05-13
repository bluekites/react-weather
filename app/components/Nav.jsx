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
    var city = this.refs.city.value;
    var encodedCity = encodeURIComponent(city);
    
    if (city.length > 0) {
      this.refs.city.value = '';
      window.location.hash = '#/?location=' + encodedCity;
    }
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
                <input type="search" ref="city" placeholder="Search weather by city"/>
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