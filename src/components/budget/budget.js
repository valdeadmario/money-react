import React, { Component } from 'react';

import './budget.css';
import BudgetIncome from '../budget-income';
import BudgetExpense from '../budget-expense';

export default class Budget extends Component {

  render() {
    return (
      <div className="budget">
        <div className='bg-info'>
          <h3 className="budget-header">
            Available Budget in
            <span className="budget__title--month">
            February 2019
          </span>:
          </h3>
          <span className="budget-value">+ 2,345.64</span>
        </div>

        <BudgetIncome/>

        <BudgetExpense/>
      </div>
    );
  }
}