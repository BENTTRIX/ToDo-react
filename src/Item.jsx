import React, { useRef, useEffect } from 'react';
import './Item.css';

export const Item = ({ task, onToggleDone, onUpdateTask, onBlur }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onToggleDone(task.id);
    }
  };

  return (
    <div className={`list__item ${task.done ? 'item--done' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.done} 
        onChange={() => onToggleDone(task.id)} 
        className="item__checkbox"
      />
      <input 
        type="text" 
        value={task.title}
        onChange={(e) => onUpdateTask(task.id, e.target.value)}
        onBlur={() => onBlur(task.id, task.title)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        placeholder="Enter a task"
        className={`item__input ${task.done ? 'item__input--done' : ''}`}
      />
    </div>
  );
};