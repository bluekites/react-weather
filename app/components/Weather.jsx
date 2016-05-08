var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
  getInitialState: function(){
    return ({
      city: 'Irvine',
      temp: 70
    });
  },
  searchHandler: function(city){
    this.setState({
      city: city,
      temp: 80
    });
  },
  render: function(){
    // using ES6 destructuring to get the states into variables
    var {temp, city} = this.state;
    
    return (
      <div>
        <h3>I am weather</h3>
        <WeatherForm onSearch={this.searchHandler}/>
        <WeatherMessage temp={temp} city={city}/>
      </div>
    );
  }
});

module.exports = Weather;