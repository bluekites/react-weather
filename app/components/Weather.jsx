var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return ({
      isLoading: false
    });
  },
  searchHandler: function(city){
    var self = this;
    self.setState({
      isLoading: true,
      errorMessage: undefined,
      city: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(city).then(function(temp) {
      self.setState({
        isLoading: false,
        city: city,
        temp: temp
      });
    }, function(e){
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  // use componentDidMount to trigger the search
  componentDidMount: function(){
    // pull out the query string
    var city = this.props.location.query.location;
    
    if (city && city.length > 0) {
      this.searchHandler(city);
      window.location.hash = '#/'; // reset the query string
    }
  },
  componentWillReceiveProps: function(newProps) {
    var city = newProps.location.query.location;
    
    if (city && city.length > 0) {
      this.searchHandler(city);
      window.location.hash = '#/'; // reset the query string
    }
  },
  render: function(){
    // using ES6 destructuring to get the states into variables
    var {isLoading, temp, city, errorMessage} = this.state;
    
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Loading weather...</h3>;
      } else if (temp && city) {
        return <WeatherMessage temp={temp} city={city}/>;
      }
    }
    
    // function to conditionally render the error modal
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }
    
    return (
      <div>
        <h1 className="text-center page-title">Get the weather!</h1>
        <WeatherForm onSearch={this.searchHandler}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;