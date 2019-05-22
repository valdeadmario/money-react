import React, { Component } from 'react';
import axios from 'axios';

import './app.css'

import InputForm from '../input-form';
import AppHeader from "../app-header";
import Budget from "../budget/budget";
import ItemList from "../items-list";
import ErrorBoundary from "../error-boundary";


export default class App extends Component {

  maxID = 0;

  state = {
            "inc":[],
            "exp": []
  }

  componentDidMount() {
    axios.get('https://api.github.com/repos/valdeadmario/db/contents/db.json')
        .then(resp => {
          this.setState({...JSON.parse(atob(resp.data.content)).budget})
        })
  }



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
   /**
     * Добавляем елемент в масив
     * @param {string} type 'exp' or 'inc'
     * @param {string} label any string
     * @param {number} value any number
     * @returns {Array} that array with plus one object.
     */  
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
  /**
     * Создаем новый обьект
     * @param {string} label any string
     * @param {number} value any number
     * @returns {object} new object with id, label and value params.
     */  
  createItems( label, value) {
    return {
      label,
      value: parseFloat(value),
      id: this.maxID++
    }
  }
  /**
     * Считаем бюджет
     * @param {string} type 'exp' or 'inc'
     * @returns {object} sum of array[type].
     */ 
  getTotal(type) {
    let total = 0;
    this.state[type].forEach((item) => {
      total += item.value;
    })
    return total;
  }

  render(){
    console.log(this.state);
    const incTotal = this.getTotal('inc');
    const expTotal = this.getTotal('exp');

    const total =  incTotal - expTotal;
    const {inc, exp} = this.state;

    return (
      <ErrorBoundary>
        <div className="todo-app">
          <AppHeader />
          <Budget

            income={incTotal}
            expense={expTotal}
            value={total}
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
