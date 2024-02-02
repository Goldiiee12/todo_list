import './style.css';
import AppLogic from './appLogic';
import DOMFunctions from './domFunctions';

let selectedProjectName = 'Default Project';

document.addEventListener('DOMContentLoaded', () => {
  let projects = AppLogic.getProjects();
  if (projects.length === 0) {
    AppLogic.addProject(selectedProjectName);
    projects = AppLogic.getProjects();
  }
  
  const selectProject = (projectName) => {
    selectedProjectName = projectName;
    const selectedProject = AppLogic.getProjectByName(selectedProjectName);
    DOMFunctions.renderTodos(selectedProject);
  };

  DOMFunctions.renderProjects(projects, selectProject);
  selectProject(selectedProjectName);

  const addProjectBtn = document.getElementById('add-project-btn');
  addProjectBtn.addEventListener('click', () => {
    const projectName = prompt('Enter project name:');
    if (projectName && !AppLogic.getProjectByName(projectName)) {
      AppLogic.addProject(projectName);
      DOMFunctions.renderProjects(AppLogic.getProjects(), selectProject);
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

  const todo = AppLogic.addTodo(
    selectedProjectName,
    titleInput.value,
    descriptionInput.value,
    dueDateInput.value,
    prioritySelect.value
  );

  if (todo) {
    // Fetch the updated project and re-render its todos
    const updatedProject = AppLogic.getProjectByName(selectedProjectName);
    DOMFunctions.renderTodos(updatedProject, AppLogic.editTodo, AppLogic.deleteTodo);
  } else {
    alert('Failed to add todo. Please try again.');
  }

  // Clear the form fields
  titleInput.value = '';
  descriptionInput.value = '';
  dueDateInput.value = '';
  prioritySelect.value = 'Medium';
});

const updatedProject = AppLogic.getProjectByName(selectedProjectName);
DOMFunctions.renderTodos(updatedProject, AppLogic.deleteTodo);
});

