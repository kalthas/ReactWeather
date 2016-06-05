var React = require('react');

var WeatherMessage = (props) => {
    return (
      <div>
        {props.location} is {props.temp}
      </div>
    );
};

module.exports = WeatherMessage;
