import React from 'react';
import Task from './Task';
import '../assets/css/Column.css';

function Column({ title, tasks, onDragStart, onDrop, columnId }) {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    onDrop(e, columnId);
  };

  return (
    <div 
      className="column"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            onDragStart={onDragStart}
            columnId={columnId}
          />
        ))}
      </div>
    </div>
  );
}

export default Column; 