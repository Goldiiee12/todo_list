// path: /src/domFunctions.js
// Handles all DOM updates

import AppLogic from './appLogic';

const DOMFunctions = (() => {
    const projectListElement = document.getElementById('project-list');
    const todosDisplayElement = document.getElementById('todos-display');

    const renderProjects = (projects) => {
        projectListElement.innerHTML = ''; // Clear the project list
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.textContent = project.name;
            projectElement.classList.add('project');
            projectElement.addEventListener('click', () => renderTodos(project.todos));
            projectListElement.appendChild(projectElement);
        });
    };

    const renderTodos = (todos) => {
        todosDisplayElement.innerHTML = ''; // Clear the todos display
        todos.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.classList.add('todo');
            
            // Add title, due date, priority, etc.
            todoElement.innerHTML = `
                <h3>${todo.title}</h3>
                <p>Due: ${todo.dueDate}</p>
                <p>Priority: ${todo.priority}</p>
                <button class="edit-todo">Edit</button>
                <button class="delete-todo">Delete</button>
            `;

            // Attach event listeners for edit and delete buttons
            todoElement.querySelector('.edit-todo').addEventListener('click', () => {/* Edit logic */});
            todoElement.querySelector('.delete-todo').addEventListener('click', () => {
                AppLogic.removeTodoFromProject(/* project name */ todo.title);
                renderTodos(/* current project todos */);
            });

            todosDisplayElement.appendChild(todoElement);
        });
    };

    return { renderProjects, renderTodos };
})();

export default DOMFunctions;

