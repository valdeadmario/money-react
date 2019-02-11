import React, { Component } from 'react';

import './input-form.css';

export default class InputForm extends Component {
  render() {
    return (
      <form className="item-add-form">

        <select className="add-type">
          <option value="inc" selected>+</option>
          <option value="exp">-</option>
        </select>

        <input type="text"
               className="form-control"
               placeholder='Description'/>

        <input type="number"
               className="add-value"
               placeholder="Value"/>

        <button
          className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}