import React, { Component } from 'react';

import './input-form.css';

export default class InputForm extends Component {
  state = {
    type: 'inc',
    label: '',
    value: '',
  }

  onFormChange = (e, propsName) => {

    this.setState({
      [propsName]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {type, label, value} = this.state;
    this.props.onItemAdded(type, label, value);
    this.setState({
      type: type,
      label: '',
      value: '',
    })
  }

  render() {

    return (
      <form className="item-add-form"
            onSubmit={this.onSubmit}>

        <select multiple=""
                className="form-control add-type"
                onChange={(e) => this.onFormChange(e, 'type')}>
          <option value='inc'>+</option>
          <option value='exp'>-</option>
        </select>

        <input type="text"
               className="form-control add-description"
               placeholder='Description'
               onChange={(e) => this.onFormChange(e, 'label')}
               value={this.state.label}/>

        <div className='d-flex'>
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="number"
                 className="form-control add-number"
                 aria-label="Amount (to the nearest dollar)"
                 onChange={(e) => this.onFormChange(e, 'value')}
                 value={this.state.value}/>
        </div>
        <button className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}