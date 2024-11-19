import React from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Kanban Board</h1>
      </header>
      <KanbanBoard initialTasks={{
        todo: [{ id: 1, title: 'Task 1', status: 'todo' }],
        inProgress: [{ id: 2, title: 'Task 2', status: 'inProgress' }],
        done: [{ id: 3, title: 'Task 3', status: 'done' }]
      }} />
    </div>
  );
}

export default App;
