var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleNewCity: function (city) {
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    var that = this;
    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        isLoading: false,
        location: city,
        temp: temp
      })
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      })
    });
  },
  render: function() {
    var {isLoading, location, temp, errorMessage} = this.state;
    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleNewCity} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
