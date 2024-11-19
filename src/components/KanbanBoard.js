import React, { useState } from 'react';
import Column from './Column';
import '../assets/css/KanbanBoard.css';

function KanbanBoard() {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: 'Task 1', description: 'Description 1', completed:true },
      { id: 2, title: 'Task 2', description: 'Description 2', completed:false },
    ],
    inProgress: [],
    done: [],
  });

  const handleDragStart = (e, taskId, sourceColumn) => {
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceColumn', sourceColumn);
  };

  const handleDrop = (e, targetColumn) => {
    const taskId = parseInt(e.dataTransfer.getData('taskId'));
    const sourceColumn = e.dataTransfer.getData('sourceColumn');
    
    if (sourceColumn === targetColumn) return;

    setTasks(prev => {
      const task = prev[sourceColumn].find(t => t.id === taskId);
      return {
        ...prev,
        [sourceColumn]: prev[sourceColumn].filter(t => t.id !== taskId),
        [targetColumn]: [...prev[targetColumn], task],
      };
    });
  };

  return (
    <div className="kanban-board">
      <Column 
        title="To Do" 
        tasks={tasks.todo}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        columnId="todo"
      />
      <Column 
        title="In Progress" 
        tasks={tasks.inProgress}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        columnId="inProgress"
      />
      <Column 
        title="Done" 
        tasks={tasks.done}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        columnId="done"
      />
    </div>
  );
}

export default KanbanBoard; 