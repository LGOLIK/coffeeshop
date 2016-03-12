'use strict';

const React = require('react');
const OneBeverage = require('./one-beverage.js')

const Beverages = React.createClass({
  // render the beverage - this is how we link to the one beverage component
  renderBeverage: function(key) {
    return (
      <OneBeverage key={key} index={key} deleteBeverage={this.props.deleteBeverage} details={this.props.beverages[key]}/>
    )
  },
  render: function() {
    return (
      <section id="beverages-display" className="col s7">
        <ul className="collection with-header">
          <li className="collection-header"><h4>Beverages</h4></li>
           {/* list of beverages go here */}
           {Object.keys(this.props.beverages)
             .map(this.renderBeverage)}
        </ul>
      </section>
    )
  }
});

module.exports = Beverages;
