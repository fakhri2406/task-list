# Task-List Application

## Overview
Task-List is a React application that demonstrates a fully functional task management system with multiple pages (React Router), global state handling (Redux Toolkit), local data persistence (localStorage), and a dual-theme interface (light/dark). Users can add new tasks, mark them as completed, edit details, filter them by status, and search for specific tasks—all within an intuitive, two-column layout.

---

## Features

1. **Multi-Page Navigation**
   - Utilizes **React Router** for multiple pages/routes:
     - Home (`"/"`) with a task list and an empty detail/edit area.
     - Detail (`"/:taskId"`) showing task information.
     - Edit (`"/:taskId/edit"`) providing a form to update task details.

2. **Task Management**
   - **Add Tasks**: Create tasks with a title and description.
   - **Edit Tasks**: Update existing task data (title, description).
   - **Delete Tasks**: Permanently remove tasks from the list.
   - **Toggle Completion**: Mark a task as done or undone with a checkbox.

3. **Search & Filtering**
   - **Search**: Quickly find tasks by typing in a search box (filters titles in real time).
   - **Filter by Status**: Show all, completed, or remaining tasks.

4. **State Management & Persistence**
   - **Redux Toolkit**: All task data is stored in a global Redux store, making it easy to add, toggle, edit, or delete tasks from any component.
   - **LocalStorage**: Redux state (task list) is automatically persisted across browser refreshes.

5. **Theming**
    - **Light & Dark Theme**: Easily switch between a light and a dark UI theme using a toggle button in the header.

6. **Two-Column Layout**
   - **Left Column**: Task list, filters, search, and a form for adding tasks.
   - **Right Column**: Task detail or edit form, depending on the route.

---

## Tech Stack

1. **Frontend**:
   - **React** (v19+)
   - **React Router** (v6+) for routing
   - **Redux Toolkit** for global state management
   - **CSS** for styling (light/dark themes)

2. **Persistence**:
   - **localStorage** for storing tasks

3. **Build/Scaffold**:
   - **Create React App** structure for the initial setup

---

## Installation and Setup

### Prerequisites
1. [Node.js](https://nodejs.org/) (LTS or Current).
2. [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for dependencies.

### Steps

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/fakhri2406/task-list.git
   cd task-list
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. **Run the Application**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
   This starts the development server on [http://localhost:3000](http://localhost:3000).

---

## Project Main Structure

```
task-list/
├── package.json
├── public
│   └── index.html
├── src
│   ├── App.jsx
├── ├── index.js
├── ├── index.css
│   ├── components
│   │   └── MainLayout.jsx
│   │   └── SearchBar.jsx
│   │   └── FilterButtons.jsx
│   │   └── tasks
│   │       ├── NewTaskForm.jsx
│   │       ├── TaskList.jsx
│   │       ├── TaskDetails.jsx
│   │       ├── TaskEdit.jsx
│   ├── redux
│   │   └── store.js
│   │   └── slice.js
│   └── styles
│       ├── App.css
│       ├── MainLayout.css
│       ├── NewTaskForm.css
│       └── TaskList.css
│       └── TaskDetails.css
└── README.md
```

1. **`App.jsx`**
    - Root component managing the theme state (light/dark).
    - Routes are defined here for main layout, detail, and edit.

2. **`MainLayout.jsx`** / **`SearchBar.jsx`** / **`FilterButtons.jsx`**
    - Two-column layout: left with tasks and filters, right with an `<Outlet>` for details/editing.

3. **`TaskList.jsx`** / **`TaskDetails.jsx`** / **`TaskEdit.jsx`**
    - Components for listing tasks, showing task details, and editing tasks.

4. **`slice.js`**
    - Redux Toolkit slice defining actions (addTask, toggleTask, etc.) and the reducer.

5. **`store.js`**
    - Configures the Redux store with the `tasks` slice, persists tasks to localStorage.

6. **`App.css`, `MainLayout.css`, `TaskList.css`, etc.**
    - Separate CSS files for each component, each containing both light and dark theme rules.

---

## Usage

1. **Add a Task**
    - In the left column, fill in the title and description in the “Add Task” form.
    - Click **“Add”** to create the new task.

2. **View Details**
    - Click on a task’s title in the list to open its detail view in the right column.

3. **Edit a Task**
    - Click the **edit button** (✎) next to the task.
    - Modify the title or description in the form on the right, and click **“Save”**.

4. **Delete a Task**
    - Click the **delete button** (✕) next to the task.
    - The task will be removed immediately.

5. **Toggle Completion**
    - Check or uncheck the **checkbox** next to a task’s title.
    - A checked box means the task is done.

6. **Search**
    - Type text into the **search bar** (top-left) to find tasks by title.

7. **Filter Tasks**
    - Click **Show all**, **Completed**, or **Remaining** to filter tasks by status.

8. **Switch Theme**
    - In the header, click the **moon/sun button** to toggle between light and dark themes.

---

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
