'use strict';

const React = require('react');

const Header = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Coffee Shop</a>
        </div>
      </nav>
    )
  }
});


module.exports = Header;
