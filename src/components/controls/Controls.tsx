import React, { useState } from 'react';
import { IoAdd, IoList } from 'react-icons/io5';

import styles from './styles/Controls.module.scss';

const Controls = () => {
  const [task, setTask] = useState('');

  const onTypeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setTask(value);
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

      <button type='button' title='Add Task'><IoAdd /></button>

      <button type='button' title='Completed Tasks'><IoList /></button>
    </div>
  );
};

export default Controls;
