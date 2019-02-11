import React from 'react';

import './budget-income.css';

const BudgetIncome = () => {
  return (
    <div className="budget-item bg-success">
      <h4 className='budget-title'>Income</h4>
      <span className="budget-value text-dark">+ 4,300.00</span>
    </div>
  );
};

export default BudgetIncome;
