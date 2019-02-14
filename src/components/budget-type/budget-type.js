import React from 'react';

import './budget-type.css';
import withNumbers from "../hoc-helpers/with-number";

const BudgetType = ({title, clazz, percentage, value, children}) => {
  return (
    <div className={'budget-item ' + clazz}>
      <h4 className='budget-title'>{title}</h4>
      {children(value, percentage)}
    </div>
  );
};

export default withNumbers()(BudgetType)
