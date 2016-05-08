var React = require('react');

var WeatherMessage = React.createClass({
  
  render: function(){
    //var temp = this.props.temp;
    //var city = this.props.city;
    // use ES6 destructuring to get the variables from props
    var {temp, city} = this.props;
    return (
      <h3>The current weather in {city} is: {temp}</h3>
    );
  }
});

module.exports = WeatherMessage;