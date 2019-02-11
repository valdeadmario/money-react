import React, { Component } from 'react';

import './input-form.css';

export default class InputForm extends Component {
  render() {
    return (
      <form className="item-add-form">

        <select multiple="" className="form-control add-type" >
          <option value='inc'>+</option>
          <option value='exp'>-</option>
        </select>

        <input type="text"
               className="form-control add-description"
               placeholder='Description'/>
        <div className='d-flex'>
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="number" className="form-control add-number" aria-label="Amount (to the nearest dollar)"/>
        </div>
        <button
          className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}