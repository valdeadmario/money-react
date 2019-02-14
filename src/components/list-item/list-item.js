import React from 'react';

import './list-item.css';
import { withNumbers } from '../hoc-helpers'

const ListItem = ({label, value, onDeleted}) => {
  return (
    <span className="list-item">
        <span className="list-item-label">
          {label}
      </span>
      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
      <span className="list-item-value float-right">
        {value}
      </span>
    </span>
  );
};

export default withNumbers()(ListItem);