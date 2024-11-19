import React from 'react';
import '../assets/css/Task.css';

function Task({ task, onDragStart, columnId }) {
  return (
    <div
      className="task"
      draggable
      onDragStart={(e) => onDragStart(e, task.id, columnId)}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}

export default Task; 