import React from 'react';

const withNumbers = () => (Wrapped) => {
  return (props) => {
    let value;
    for (let key in props) {
      if (typeof props[key] == 'number') {
        value = props[key];
      }
    }
    let intPart, decimalPart;
    value = Math.abs(value).toFixed(2);
    [intPart, decimalPart] = value.split('.');

    if (intPart.length > 3) {
      value = `${intPart.substring(0,intPart.length -3)},${intPart.substring(intPart.length -3)}.${decimalPart}`
    }
    return (
      <Wrapped {...props}
                value={value}/>
    )
  };
};

export default withNumbers;
