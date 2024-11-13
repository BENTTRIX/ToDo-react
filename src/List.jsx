import { useRef } from 'react';
import { Item } from './Item';
import './List.css'

export function TodoList({ tasks, onToggleDone, onUpdateTask, onBlur }) {
    const inputRef = useRef(null);
  
    return (
      <ul className='container__list'>
        {tasks.map((task, index) => (
          <Item
            key={task.id}
            task={task}
            onToggleDone={onToggleDone}
            onUpdateTask={onUpdateTask}
            onBlur={onBlur}
            inputRef={index === tasks.length - 1 ? inputRef : null}
          />
        ))}
      </ul>
    );
  }
  