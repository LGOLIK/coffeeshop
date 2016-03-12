'use strict';

console.log('script.js loaded!');

const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

// link to utilities

// components
const Header = require('./components/header.js');
const Beverages = require('./components/beverages.js');
const OneBeverage = require('./components/one-beverage.js');
const BeverageForm = require('./components/beverage-form.js');

// App starting point
let App = React.createClass({
  // initial state is an empty beverages container must happen in App
  getInitialState: function() {
    return {
      beverages: {}
    };
  },
  // get the data from the 'db' - must happen in App
  componentDidMount:function() {
    // set the state to contain a JSON formatted object of all the items in the DB
   $.get('/api/beverages').done( data => {
      data.forEach( el=> {
        this.state.beverages[el.bev_id] = el;
      });
      this.setState({beverages: this.state.beverages})
    })
    // $.get('api/beverages')
    //   .done( data =>
    //     this.setState({beverages: this.state.beverages})
    //   )
  },

  addBeverage: function(beverage) {
    // ajax post and set state go here
    let updateBev = (data) => {
      let newID = data.bev_id;
      // add new task to state
      this.state.beverages[newID] = beverage;
      this.setState({ beverages: this.state.beverages });
    }

    $.post('/api/beverages', beverage)
      .done(updateBev);
  },

  deleteBeverage: function(bev) {
    let deleteBev = () => {
      delete this.state.beverages[bev];
      this.setState({ beverages: this.state.beverages})
    }

    $.ajax({
      url: `/api/beverages/${bev}`,
      type: 'DELETE'
    }).done(() => {
      delete this.state.beverages[bev];
      this.setState({ beverages: this.state.beverages})
    })
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            {/* call Beverages component and pass the beverages state to it */}
            <Beverages beverages={this.state.beverages} deleteBeverage={this.deleteBeverage}/>
            {/* call Beverage Form component and pass in the addBeverage function */}
            <BeverageForm addBeverage={this.addBeverage}/>
          </div>
        </div>
      </div>
    )
  }
});


ReactDOM.render(
  <App />, document.getElementById('container')
);
