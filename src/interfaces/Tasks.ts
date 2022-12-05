import ITaskItem from './TaskItem';

interface ITasks {
  open: ITaskItem[],
  archived: ITaskItem[],
}

export default ITasks;
