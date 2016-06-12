var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <p>
          This is a weather application build on React. I have built this
          for the complete react web develop course.
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org/">Open Weather Map</a> - I use openWeatherMap to search for weather data by city name.
          </li>
        </ul>
      </div>
    );
};

module.exports = About;
