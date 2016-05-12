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
        <input type="search" placeholder="Search weather by city" ref="city"/>
        <button className="button expanded hollow">Find the weather!</button>
      </form>
    );
  }
});

module.exports = WeatherForm;