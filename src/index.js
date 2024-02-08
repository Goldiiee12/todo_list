// src/index.js
import Project from './js/Project';
import TodoItem from './js/TodoItem';
import * as dateUtils from './js/dateUtils';
import * as storage from './js/storage';
import './main.css';

// Function to create and save a new project
function createNewProject(projectName) {
    const existingProjects = storage.getProjects();
    if (existingProjects.some(p => p.name === projectName)) {
        alert('Project with this name already exists.');
        return;
    }
    const newProject = new Project(projectName);
    storage.saveProject(newProject);
    addProjectToSidebar(newProject);
    displayTodosForProject(newProject); // Display todos for the new project
}

// Function to add a project to the sidebar
const addProjectToSidebar = (project) => {
    const projectListElement = document.getElementById('projects-list');
    let projectElement = projectListElement.querySelector(`[data-project-name="${project.name}"]`);

    if (!projectElement) {
        projectElement = document.createElement('div');
        projectElement.classList.add('project-name');
        projectElement.setAttribute('data-project-name', project.name);

        const projectNameSpan = document.createElement('span');
        projectNameSpan.textContent = project.name;
        projectElement.appendChild(projectNameSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-project-btn');
        deleteButton.onclick = () => deleteProject(project.name);
        projectElement.appendChild(deleteButton);

        projectElement.addEventListener('click', (event) => {
            // Prevents the project name click event when clicking on the delete button
            if (event.target !== deleteButton) {
                displayTodosForProject(project);
            }
        });

        projectListElement.appendChild(projectElement);
    }
};

function deleteProject(projectName) {
    if (confirm(`Are you sure you want to delete the project: ${projectName}?`)) {
        storage.deleteProject(projectName); // Delete from storage
        document.querySelector(`[data-project-name="${projectName}"]`).remove(); // Remove from sidebar
        const todoContainer = document.getElementById('todo-container');
        todoContainer.innerHTML = ''; // Optionally clear the todo list if it was displaying the deleted project's todos
    }
}


// Function to display todos for a selected project in the main content
const displayTodosForProject = (project) => {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = ''; // Clear the previous todos

    const todoListElement = document.createElement('ul');
    todoListElement.classList.add('todo-list');

    project.todos.forEach(todo => {
        const todoElement = document.createElement('li');
        todoElement.textContent = `${todo.title} - Due: ${dateUtils.formatDate(new Date(todo.dueDate))} - ${todo.description} - Priority: ${todo.priority}`;
        todoListElement.appendChild(todoElement);
    });

    // Append the todo list to the main content's todo container
    todoContainer.appendChild(todoListElement);
};

// Function to render all projects in the sidebar
const renderProjectsInSidebar = () => {
    const projects = storage.getProjects();
    projects.forEach(addProjectToSidebar);
};

const addOrUpdateProjectInView = (project) => {
    const todoContainer = document.getElementById('todo-container');
    
    // Create a container for this project if it does not already exist
    let projectTodosContainer = todoContainer.querySelector(`[data-project-name="${project.name}"]`);
    
    // If the container doesn't exist, create it
    if (!projectTodosContainer) {
        projectTodosContainer = document.createElement('div');
        projectTodosContainer.classList.add('project-todos-container');
        projectTodosContainer.setAttribute('data-project-name', project.name);
        todoContainer.appendChild(projectTodosContainer);
    } else {
        // Clear the container if it already existed
        projectTodosContainer.innerHTML = '';
    }

    // Create and append the project name header
    const projectHeader = document.createElement('h2');
    projectHeader.textContent = project.name;
    projectTodosContainer.appendChild(projectHeader);

    // Create and append the todo list for this project
    const todoListElement = document.createElement('ul');
    todoListElement.classList.add('todo-list');
    project.todos.forEach(todo => {
        const todoElement = document.createElement('li');
        todoElement.textContent = `${todo.title} - Due: ${dateUtils.formatDate(new Date(todo.dueDate))} - ${todo.description} - Priority: ${todo.priority}`;
        todoListElement.appendChild(todoElement);
    });

    // Append the todo list to the project's container
    projectTodosContainer.appendChild(todoListElement);
};

// When a new project is added, re-render all projects
const renderAllProjects = () => {
    const projects = storage.getProjects();
    projects.forEach(addOrUpdateProjectInView);
};

// DOMContentLoaded event to initialize the view
document.addEventListener('DOMContentLoaded', () => {
    storage.initializeStorage();
    renderProjectsInSidebar(); // Render all projects in the sidebar

    // Display todos for the first project by default if any
    const projects = storage.getProjects();
    if (projects.length > 0) {
        displayTodosForProject(projects[0]);
    } else {
        // If there are no projects, create a default one
        const defaultProject = new Project('Default Project');
        const sampleTodo = new TodoItem('Sample Todo', 'Description', new Date(), 'High');
        defaultProject.addTodo(sampleTodo);
        storage.saveProject(defaultProject);
        addProjectToSidebar(defaultProject);
        displayTodosForProject(defaultProject); // Display todos for the default project
    }

    const newProjectBtn = document.getElementById('new-project-btn');
    newProjectBtn.addEventListener('click', () => {
        const projectName = prompt('Enter the name of the new project:');
        if (projectName) {
            createNewProject(projectName);
            // This will update the sidebar and the displayed todos
        }
    });
});