var React = require('react');
var {Link, IndexLink} = require('react-router');

let Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    var city = this.refs.city.value;
    var location = encodeURIComponent(city)
    if (location.length > 1) {
      window.location.hash = `#/?location=${location}`;
    }
    this.refs.city.value = '';
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="search weather by city name..." ref="city"></input>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
