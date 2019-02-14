import React from 'react';

const withPercentage = () => (Wrapped) => {
  return (props) => {
    let percentage;
    if (props.income > 0) {
        percentage = Math.round((props.expense / props.income) * 100)
      }else {
        percentage = -1;
      }

    return (
      <Wrapped {...props} percentage={percentage}/>
    )
  };
};

export default withPercentage;