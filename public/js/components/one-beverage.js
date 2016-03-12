'use strict';

const React = require('react');

const OneBeverage = React.createClass({
  handleDeleteClick: function(evt) {
    evt.preventDefault();
    // refer to the remove Beverage action on App
    this.props.deleteBeverage(this.props.index);
  },
  render: function() {
    let removeIcon = <a href="#" onClick={this.handleDeleteClick} className="secondary-content"><i className="material-icons">delete</i></a>;
    let editIcon = <a href="#" onClick={this.handleEditClick} className="secondary-content"><i className="material-icons">mode_edit</i></a>;
    return (
      <li className="collection-item"><div><strong>{this.props.details.bev_name}</strong> {this.props.details.price}{removeIcon}{editIcon}</div>
      </li>
    )
  }
})

module.exports = OneBeverage;
