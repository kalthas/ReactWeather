var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var city = this.refs.city.value;
    if (city.length > 1) {
      this.props.onSearch(city);
    }
    this.refs.city.value = '';

  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input placeholder="Enter city name" type="text" ref="city" />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
