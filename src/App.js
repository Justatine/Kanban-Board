import React from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Kanban Board</h1>
      </header>
      <KanbanBoard />
    </div>
  );
}

export default App;
