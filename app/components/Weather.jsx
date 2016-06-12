var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleNewCity: function (city) {
    this.setState({
      isLoading: true
    });
    var that = this;
    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        isLoading: false,
        location: city,
        temp: temp
      })
    }, function (errorMessage) {
      this.setState({
        isLoading: false
      })
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;
    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleNewCity} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
