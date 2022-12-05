import React from 'react';
import Controls from './components/controls/Controls';
import TaskList from './components/tasks/TaskList';
import styles from './styles/App.module.scss';

const App = () => {
  return (
    <div className={ styles.app }>
      <Controls />
      <TaskList />
    </div>
  );
};

export default App;
