import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoAdd, IoList } from 'react-icons/io5';

import styles from './styles/Controls.module.scss';
import { addTask } from '../../app/reducers/tasks';

const Controls = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const onTypeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setTask(value);
  };

  const onAddTask = () => {
    if (task.trim().length > 0) {
      dispatch(addTask({id: Math.random(), task, completed: false}));
      setTask('');
    }
  };

  return (
    <div className={ styles.controls }>
      <h1>TODO</h1>

      <input
        type='text'
        value={ task }
        onChange={ (e) => onTypeTask(e) }
        placeholder='Add your task here'
      />

      <button
        type='button'
        title='Add Task'
        onClick={ onAddTask }
      >
        <IoAdd />
      </button>

      <button type='button' title='Completed Tasks'><IoList /></button>
    </div>
  );
};

export default Controls;
