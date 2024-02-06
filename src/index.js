//index.js
import './style.css';
import AppLogic from './appLogic';
import DOMFunctions from './domFunctions';

document.addEventListener('DOMContentLoaded', () => {
  // You don't need to declare 'selectedProjectName' here if you're always using 'Default Project'
  // And the 'initProjects' already creates the 'Default Project' if it doesn't exist
  
  let projects = AppLogic.initProjects(); // This should initialize with 'Default Project' if none exist
  
  const selectProject = (projectName) => {
    const selectedProject = AppLogic.getProjectByName(projectName);
  
    if (!selectedProject) {
      console.error(`The project "${projectName}" does not exist.`);
      return; // Early return if the project does not exist
    }
  
    DOMFunctions.renderTodos(selectedProject, AppLogic.editTodo, AppLogic.deleteTodo, AppLogic.toggleTodoComplete);
  };

  // Initial rendering of projects and todos for the 'Default Project'
  DOMFunctions.renderProjects(projects, selectProject);
  selectProject('Default Project'); // You can use the string directly since it's used only here

  // Add project event listener
  const addProjectBtn = document.getElementById('add-project-btn');
  addProjectBtn.addEventListener('click', () => {
    const projectName = prompt('Enter project name:');
    if (projectName && !AppLogic.getProjectByName(projectName)) {
      AppLogic.addProject(projectName);
      projects = AppLogic.getProjects(); // Update the local 'projects' array
      DOMFunctions.renderProjects(projects, selectProject);
      selectProject(projectName);
    } else if (AppLogic.getProjectByName(projectName)) {
      alert('A project with this name already exists.');
    }
  });

  // Event listener for adding a todo
  const newTodoForm = document.getElementById('new-todo-form');
  newTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleInput = document.getElementById('todo-title');
    const descriptionInput = document.getElementById('todo-description');
    const dueDateInput = document.getElementById('todo-due-date');
    const prioritySelect = document.getElementById('todo-priority');

    // 'selectedProjectName' was never declared in this scope, assuming you're adding todos to 'Default Project'
    const todo = AppLogic.addTodo(
      'Default Project', // Changed to 'Default Project' to match the initial project
      titleInput.value,
      descriptionInput.value,
      dueDateInput.value,
      prioritySelect.value
    );

    if (todo) {
      const updatedProject = AppLogic.getProjectByName('Default Project'); // Again, match the project name
      DOMFunctions.renderTodos(updatedProject, AppLogic.editTodo, AppLogic.deleteTodo, AppLogic.toggleTodoComplete);
    } else {
      alert('Failed to add todo. Please try again.');
    }

    // Clear the form fields
    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
    prioritySelect.value = 'Medium';
  });
});
