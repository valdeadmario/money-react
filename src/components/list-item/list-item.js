import React, { Component } from 'react';

import './list-item.css'

export default class ListItem extends Component{


  render() {
    return (
      <span className="list-item">
          <span className="list-item-label">
          Apartment rent
        </span>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
        <span className="list-item-value float-right">
          + 900.00
        </span>
      </span>
    );
  }
}
