import React from 'react';
import Controls from '../components/controls/Controls';
import TaskList from '../components/tasks/TaskList';

const TodoList = () => {
  return (
    <>
      <Controls />
      <TaskList />
    </>
  );
};

export default TodoList;
