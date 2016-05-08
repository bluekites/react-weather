var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return ({
      isLoading: false
    });
  },
  searchHandler: function(city){
    var self = this;
    self.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(city).then(function(temp) {
      self.setState({
        isLoading: false,
        city: city,
        temp: temp
      });
    }, function(errorMessage){
      self.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render: function(){
    // using ES6 destructuring to get the states into variables
    var {isLoading, temp, city} = this.state;
    
    function renderMessage() {
      if (isLoading) {
        return <h3>Loading weather...</h3>;
      } else if (temp && city) {
        return <WeatherMessage temp={temp} city={city}/>;
      }
    }
    
    return (
      <div>
        <h3>I am weather</h3>
        <WeatherForm onSearch={this.searchHandler}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;