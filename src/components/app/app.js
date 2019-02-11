import React from 'react';

import ListItem from '../list-item'
import InputForm from '../input-form';
import AppHeader from "../app-header/app-header";
import Budget from "../budget/budget";

const App = () => {
  return (
    <div className="todo-app">
      <AppHeader />
      <Budget/>
    </div>
  );
}

export default App;