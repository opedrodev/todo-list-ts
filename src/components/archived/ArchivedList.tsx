import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { MdDeleteOutline } from 'react-icons/md';

import styles from './styles/ArchivedList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ITaskState from '../../interfaces/TasksState';
import { removeTask } from '../../app/reducers/tasks';

const ArchivedList = () => {
  const { archived } = useSelector((state: ITaskState) => state.tasks);
  const dispatch = useDispatch();

  const onRemoveTask = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <section className={ styles.archivedlist }>
      <nav className={ styles.navigation }>
        <Link
          to='/'
          title='Back to Todo List'
          className={ styles.link }
        >
          <TiArrowBack />
        </Link>
        <h1 className={ styles.title }>Archived Tasks</h1>
      </nav>

      <div className={ styles.tasks }>
        {archived.map((task) => (
          <div key={ task.id } className={ styles.task }>
            <p className={ styles.text }>{ task.task }</p>

            <button
              type='button'
              className={ styles.delete }
              title='Delete Task'
              onClick={ () => onRemoveTask(task.id) }
            >
              <MdDeleteOutline />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchivedList;

