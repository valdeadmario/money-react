import React from 'react';

import './items-list.css';
import ListItem from '../list-item';

const ItemList = ({ data, onDeleted, type }) => {


  const elements = data.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <li key={id} className={'list-group-item ' + (type === 'exp' ? 'expense' : '')}>
        <ListItem
            {...itemProps}
            onDeleted={() => onDeleted(id, type)}/>
      </li>
    );
  })

  return (


    <ul className={'list-group list ' + (type === 'exp' ? 'expenseList' : '')}>
      {elements}
    </ul>
  );
}

export default ItemList;