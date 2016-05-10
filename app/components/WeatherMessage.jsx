var React = require('react');

/*var WeatherMessage = React.createClass({
  
  render: function(){
    //var temp = this.props.temp;
    //var city = this.props.city;
    // use ES6 destructuring to get the variables from props
    var {temp, city} = this.props;
    return (
      <h3>The current weather in {city} is: {temp}</h3>
    );
  }
});*/

var WeatherMessage = ({temp, city}) => {
  // var {temp, city} = props; this destructuring is so common that in arrow function we can declare the variables inside the props and it will be automatically destructured
  return (
    <h3 className="text-center">The current weather in {city} is: {temp}</h3>
  );
};

module.exports = WeatherMessage;