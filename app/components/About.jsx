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
      <h3>About Page</h3>
      <p>All about this weather app</p>
    </div>
  );
};

module.exports = About;