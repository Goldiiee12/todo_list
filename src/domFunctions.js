// domFunctions.js
import AppLogic from './appLogic';

const DOMFunctions = {
  renderProjects(projects, selectProjectCallback) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.textContent = project.name;
      projectElement.classList.add('project');
      projectElement.addEventListener('click', () => {
        selectProjectCallback(project.name);
      });
      projectList.appendChild(projectElement);
    });
  },

  renderTodos(project, editTodoCallback, deleteTodoCallback, toggleCompleteCallback) {
    const todosDisplay = document.getElementById('todos-display');
    todosDisplay.innerHTML = '';

    // Verify that the project and its todos are defined
    if (project && Array.isArray(project.todos)) {
      project.todos.forEach(todo => {
        const todoElement = document.createElement('div');
        todoElement.textContent = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;
        todoElement.classList.add('todo', todo.completed ? 'completed' : '');

        const completionCheckbox = document.createElement('input');
        completionCheckbox.type = 'checkbox';
        completionCheckbox.checked = todo.completed;
        completionCheckbox.addEventListener('change', () => {
          toggleCompleteCallback(project.name, todo.id, completionCheckbox.checked);
        });
        todoElement.prepend(completionCheckbox);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
          editTodoCallback(project.name, todo.id);
        });
        todoElement.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          deleteTodoCallback(project.name, todo.id);
        });
        todoElement.appendChild(deleteButton);

        todosDisplay.appendChild(todoElement);
      });
    } else {
      console.error('Invalid project data provided to renderTodos:', project);
      // Handle the error appropriately for your application
    }
  }
};

export default DOMFunctions;




  
  
  
  
