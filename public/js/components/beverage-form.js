'use strict';

const React = require('react');

const BeverageForm = React.createClass({
  handleSubmit: function(evt){
    console.log('asdfkjh')
    evt.preventDefault();
    // make an object of the beverage to be added to the App state
    let beverage = {
      bev_name: this.refs.bev_name.value,
      price: this.refs.price.value
    };

    // add beverage to the App state
    this.props.addBeverage(beverage);

    // clear the form
    this.refs.beverageForm.reset();
  },
  render: function() {
    return (
      <section id="new-form" className="col s5">
        <aside className="card-panel">
         {/* insert to do form here */}
         <form className="beverage-edit" ref="beverageForm" onSubmit={this.handleSubmit}>
           <h4>Add a new beverage</h4>

           <div className="row">
             <div className="input-field col s8">
               <input type="text"  id="bev_name" ref="bev_name" placeholder="Beverage Name"/>
             </div>
             <div className="input-field col s4">
               <input type="number" id="price" ref="price" placeholder="Price" />
             </div>
           </div>
           <div className="row">
             <button className="btn waves-effect waves-light col s6" type="submit" name="action">Add Beverage</button>
           </div>
         </form>
        </aside>
      </section>
    )
  }
})

module.exports = BeverageForm;
