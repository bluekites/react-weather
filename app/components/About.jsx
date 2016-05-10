var React = require('react');

/*var About = React.createClass({
  render: function(){
    return (
      <h3>About Page</h3>
    );
  }
});*/

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About the Weather App</h1>
      <p>This is a weather query application that is built on react. This was a really fun exercise for my first React app!</p>
      <p>Some of the tools used in this app:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Javascript library used for this app
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - The API used for weather data
        </li>
      </ul>
    </div>
  );
};

module.exports = About;