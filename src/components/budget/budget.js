import React, { Component } from 'react';

import './budget.css';
import BudgetType from '../budget-type';
import { withNumbers } from "../hoc-helpers";
import withPercentage from "../hoc-helpers/with-percentage";


class Budget extends Component {
  render() {
    const {
          income,
          expense,
          value,
          percentage} = this.props;
    return (
      <div className="budget bg-info">
        <div className='total-budget '>
          <h2 className="total-title text-white">
            Available Budget in
            <span className="budget__title--month">
              {' May 2019'}
            </span>:
          </h2>
          <span className="total-value text-dark">{value < 0 ? '-' : '+'} {value}</span>
        </div>

        <BudgetType title='Income'
                    clazz='bg-success'
                    value={income}>
          { (income) => {
            return <span className="budget-value text-dark">+ {income}</span>;
          }
          }
        </BudgetType>

        <BudgetType title='Expense'
                    clazz='expense-budget bg-danger'
                    percentage={percentage}
                    value={expense}>
          { (expense, percentage) => {
            return (
              <span className='d-flex'>
                <span className="budget-value text-dark">- {expense}</span>
                <span className="expense-percentage">{percentage !== -1 ? percentage + ' %' : '...'}</span>
              </span>
            );
          }
          }
        </BudgetType>
      </div>
    );
  };
};

export default withNumbers()(withPercentage()(Budget));