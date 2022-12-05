import React from 'react';
import { useSelector } from 'react-redux';
import ITaskState from '../../interfaces/TasksState';
import TaskItem from './TaskItem';

import styles from './styles/TaskList.module.scss';

const TaskList = () => {
  const tasks = useSelector((state: ITaskState ) => state.tasks);

  return (
    <div className={ styles.tasklist }>
      { tasks.open.map((task) => (
        <TaskItem
          key={ task.id }
          task={ task.task }
          completed={ task.completed }
          id={ task.id }
        />
      )) }
    </div>
  );
};

export default TaskList;
