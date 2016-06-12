var React = require('react');

var WeatherMessage = (props) => {
    return (
      <div>
        <h3 className="text-center">
          {props.location} is {props.temp}
        </h3>
      </div>
    );
};

module.exports = WeatherMessage;
