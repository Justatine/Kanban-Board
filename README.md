# Kanban Board with Dynamic Data Handling 🗂️

A fully functional **Kanban Board** built using **React.js** and **TypeScript**, designed to manage tasks dynamically. This project demonstrates state management, drag-and-drop functionality, and component-based architecture.

---

## Features ✨

- **Dynamic Task Management**: Add, edit, delete, and move tasks across columns.
- **Drag-and-Drop**: Rearrange tasks using drag-and-drop (powered by `react-beautiful-dnd`).
- **Column Management**: Add and delete columns dynamically.
- **Responsive Design**: Optimized for both desktop and mobile.
- **TypeScript Integration**: Ensures type safety and robust development.

---

## Tech Stack 🛠️

- **React.js**: Frontend framework.
- **TypeScript**: Strongly typed superset of JavaScript.
- **react-beautiful-dnd**: For drag-and-drop interactions.
- **Styled Components**: For styling components.
- **React Context API**: For state management.
- **Vite**: Fast build tool for React projects.

---

## Installation and Setup 🚀

### Prerequisites
- Node.js (16+)
- npm or yarn package manager

### Steps to Run Locally
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/kanban-board.git
   cd kanban-board

1. **Install Dependencies**  
   ```bash
    npm install
    # or
    yarn install

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/kanban-board.git
   cd kanban-board

1. **Run the Development Server**  
   ```bash
    npm run dev
    # or
    yarn dev

1. **Access the App**  
   ```bash
    Open your browser and navigate to http://localhost:3001.

### Key Components 🧩
- **Board Component**

---

- Manages the overall layout and state of the Kanban board.
- Handles adding/removing columns dynamically.
- Column Component

- Represents individual columns (e.g., "To-Do", "In Progress", "Done").
- Supports task addition, deletion, and drag-and-drop handling.
Task Component

Represents a single task item.
Editable and draggable.
BoardContext

Provides a global state for managing columns and tasks.