var React = require('react');

var WeatherForm = React.createClass({
  submitHandler: function(e){
    e.preventDefault();
    var city = this.refs.city.value;
    if (city.length > 0) {
      this.refs.city.value = '';
      this.props.onSearch(city);
    }
  },
  render: function(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="Input city here" ref="city"/>
        <button className="button expanded hollow">Find the weather!</button>
      </form>
    );
  }
});

module.exports = WeatherForm;