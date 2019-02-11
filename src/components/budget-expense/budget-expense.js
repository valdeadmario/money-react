import React from 'react';

import './budget-expense.css';

const BudgetExpense = () => {
  return (
    <div className="budget-item expense bg-danger">
      <h4 className='budget-title'>Expense</h4>
      <span className='d-flex'>
        <span className="budget-value text-dark"> 4,300.00</span>
        <span className="expense-percentage">45%</span>
      </span>
    </div>
  );
};

export default BudgetExpense;