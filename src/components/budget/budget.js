import React, { Component } from 'react';

import './budget.css';
import BudgetIncome from '../budget-income';
import BudgetExpense from '../budget-expense';

export default class Budget extends Component {

  render() {
    return (
      <div className="budget bg-info">
        <div className='total-budget '>
          <h2 className="total-title text-white">
            Available Budget in
            <span className="budget__title--month">
              February 2019
            </span>:
          </h2>
          <span className="total-value text-dark">+ 2,345.64</span>
        </div>

        <BudgetIncome/>

        <BudgetExpense/>
      </div>
    );
  }
}