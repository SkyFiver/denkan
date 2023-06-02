import React from 'react';
import KanbanBoard from './KanbanBoard';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;