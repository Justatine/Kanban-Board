import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

function KanbanBoard({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const { source, destination } = result;
    const sourceList = [...tasks[source.droppableId]];
    const destList = source.droppableId !== destination.droppableId 
      ? [...tasks[destination.droppableId]]
      : sourceList;
    
    const [removed] = sourceList.splice(source.index, 1);
    removed.status = destination.droppableId;
    destList.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        {Object.keys(tasks).map((column) => (
          <div key={column} style={{ width: '30%' }}>
            <h2>{column}</h2>
            <Droppable droppableId={column}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    backgroundColor: column === 'done' ? '#e6ffe6' : column === 'inProgress' ? '#ffffe0' : '#f4f4f4',
                    padding: '10px',
                    minHeight: '300px'
                  }}
                >
                  {tasks[column].map((task, index) => (
                    <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            backgroundColor: task.status === 'done' ? '#90EE90' : task.status === 'inProgress' ? '#fdf0ac' : 'white',
                            padding: '10px',
                            margin: '10px 0',
                            borderRadius: '4px',
                            ...provided.draggableProps.style
                          }}
                        >
                          {task.title}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard; 