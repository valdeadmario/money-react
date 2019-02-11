import React from 'react';

import './app.css'

import ListItem from '../list-item'
import InputForm from '../input-form';
import AppHeader from "../app-header/app-header";
import Budget from "../budget/budget";
import IncomeList from "../income-list";

const App = () => {
  return (
    <div className="todo-app">
      <AppHeader />
      <Budget />
      <InputForm />
      <div className='all-lists'>
        <IncomeList />
        <IncomeList />
      </div>
    </div>
  );
}

export default App;