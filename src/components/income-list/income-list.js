import React from 'react';

import './income-list.css';
import ListItem from "../list-item/list-item";

const IncomeList = () => {
  return (
    <ul className="list-group income-list">
      <li className="list-group-item">
        <ListItem/>
      </li>
    </ul>
  );
}

export default IncomeList;