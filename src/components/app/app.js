import React, { Component } from 'react';

import './app.css'

import InputForm from '../input-form';
import AppHeader from "../app-header";
import Budget from "../budget/budget";
import ItemList from "../items-list";
import ErrorBoundary from "../error-boundary";

export default class App extends Component {

  maxID = 0;

  state = {
    inc: [
      this.createItems('Salary', 400),
      this.createItems('Sold car', 1346),
      this.createItems('Gift', 100),
    ],
    exp: [
      this.createItems('Drink coffee', 50),
      this.createItems('Buy IPad', 300),
      this.createItems('New shoe', 100),
      this.createItems('Update WebStorm', 120)
    ]

  };

  deleteItem = (id, type) => {
    this.setState((state) => {
      const idx = state[type].findIndex((el) => el.id === id);

      const newArr = [
        ...state[type].slice(0,idx),
        ...state[type].slice(idx+1)
      ];

      return {
        [type]: newArr
      }
    })
  }

  addItem = (type, label, value) => {
    if (label && value) {
      const item = this.createItems(label, value);
      this.setState((state) => {
        const newArr = [
          ...state[type],
          item
        ]
        return {
          [type]: newArr
        }
      })
    }
  }

  createItems( label, value) {
    return {
      label,
      value: parseFloat(value),
      id: this.maxID++
    }
  }

  getTotal(type) {
    let total = 0;
    this.state[type].forEach((item) => {
      total += item.value;
    })
    return total;
  }

  render(){
    console.log(this.state)
    const incTotal = this.getTotal('inc');
    const expTotal = this.getTotal('exp');

    const total =  incTotal - expTotal;

    const {inc, exp} = this.state;

    return (
      <ErrorBoundary>
        <div className="todo-app">
          <AppHeader />
          <Budget
            value={total}
            income={incTotal}
            expense={expTotal}
            percentage/>

          <InputForm onItemAdded={this.addItem}/>
          <div className='all-lists'>
            <ItemList
              data={inc}
              onDeleted={this.deleteItem}
              type='inc'/>

            <ItemList
              data={exp}
              onDeleted={this.deleteItem}
              type='exp'/>
          </div>
        </div>
      </ErrorBoundary>
    );
  };
};
