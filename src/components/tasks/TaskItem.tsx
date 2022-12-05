import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ITaskItem from '../../interfaces/TaskItem';
import { IoArchiveOutline } from 'react-icons/io5';
import { ImCheckmark2, ImCheckmark } from 'react-icons/im';

import styles from './styles/TaskItem.module.scss';
import { archiveTask, completeTask, incompleteTask } from '../../app/reducers/tasks';

const TaskItem: React.FC<ITaskItem> = (props) => {
  const { task, completed, id } = props;

  const [isCompleted, setIsCompleted] = useState(completed);
  const dispatch = useDispatch();

  const onCompleteTask = () => {
    setIsCompleted(!isCompleted);
    dispatch(isCompleted ? incompleteTask(id) : completeTask(id));
  };

  const onArchiveTask = () => {
    dispatch(archiveTask(id));
  };

  return (
    <div className={ `${styles.taskitem} ${isCompleted && styles.completed}` }>
      <div
        title={ isCompleted ? 'Mark as incomplete' : 'Mark as complete' }
        className={ styles.check }
        onClick={ onCompleteTask }
      >
        { isCompleted ? <ImCheckmark /> : <ImCheckmark2 /> }
      </div>

      <p className={ styles.task }>{ task }</p>

      { isCompleted && (
        <div
          className={ styles.archive }
          title='Archive Task'
          onClick={ onArchiveTask }
        >
          <IoArchiveOutline />
        </div>
      ) }
    </div>
  );
};

export default TaskItem;
