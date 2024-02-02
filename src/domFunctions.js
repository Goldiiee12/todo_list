import AppLogic from './appLogic';

const DOMFunctions = {
  renderProjects(projects, selectProjectCallback) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Clear the list first

    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.textContent = project.name;
      projectElement.classList.add('project');
      projectElement.addEventListener('click', () => {
        // Use the callback to handle project selection
        selectProjectCallback(project.name);
      });
      projectList.appendChild(projectElement);
    });
  },

  renderTodos(project) {
    const todosDisplay = document.getElementById('todos-display');
    todosDisplay.innerHTML = ''; // Clear the todos display

    project.todos.forEach(todo => {
      const todoElement = document.createElement('div');
      todoElement.textContent = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;
      todoElement.classList.add('todo');

      // Create and append edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
        // Code to handle todo editing
        const newTitle = prompt('Edit the title', todo.title); // Simple prompt for demo
        if (newTitle) {
          AppLogic.editTodo(project.name, todo.id, { title: newTitle });
          DOMFunctions.renderTodos(AppLogic.getProjectByName(project.name));
        }
      });
      todoElement.appendChild(editButton);

      // Create and append delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        AppLogic.deleteTodo(project.name, todo.id);
        DOMFunctions.renderTodos(AppLogic.getProjectByName(project.name)); // Re-render the todos after deletion
      });
      todoElement.appendChild(deleteButton);

      // Append the todo element with buttons to the display container
      todosDisplay.appendChild(todoElement);
    });
  },

  // Additional functions for adding, editing, and deleting todos, etc.
};

export default DOMFunctions;

  
  
  
  
