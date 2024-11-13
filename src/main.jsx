import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { TodoList } from './List';
import './main.css';


function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), title: '', done: false }]);
  };

  const updateTask = (id, newTitle) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    ));
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const handleBlur = (id, title) => {
    if (title.trim() === '') {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  return (
    <div className='container'>
      <h1 className='container__title'>Todo List</h1>
      <button className='container__btn' onClick={addTask}>New Task</button>
      <TodoList
        tasks={tasks}
        onToggleDone={toggleDone}
        onUpdateTask={updateTask}
        onBlur={handleBlur}
      />
    </div>
  );
}
export default TodoApp 

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<TodoApp/>)