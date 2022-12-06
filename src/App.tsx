import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './styles/App.module.scss';
import TodoList from './pages/TodoList';
import Archived from './pages/Archived';

const App = () => {
  return (
    <div className={ styles.app }>
      <Routes>
        <Route path='/' element={ <TodoList /> } />
        <Route path='/archived' element={ <Archived /> } />
        <Route path='*' element={ <TodoList /> } />
      </Routes>
    </div>
  );
};

export default App;
