import React from 'react';

import './ToDo.style.scss';
import Header from './components/header/header';
import TodoList from './components/todoList/todo-list';
import Footer from './components/footer/footer';

function ToDo() {
    
  return (
    <div className='todo-app-container'>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default ToDo;
