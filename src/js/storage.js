// storage.js
import Project from './Project';
import TodoItem from './TodoItem';

function getProjects() {
  // Ensure that when you're parsing the projects, the date is correctly handled in the TodoItem's constructor.
  const projects = JSON.parse(localStorage.getItem('projects')) || [];
  return projects.map(project => new Project(project.name, project.todos.map(todo => new TodoItem(todo.title, todo.description, new Date(todo.dueDate), todo.priority))));
}


function saveProjects(projects) {
  const serializedProjects = projects.map(project => ({
    name: project.name,
    todos: project.todos.map(todo => {
      const dueDate = todo.dueDate instanceof Date ? todo.dueDate : new Date(todo.dueDate);
      return {
        title: todo.title,
        description: todo.description,
        dueDate: dueDate.toISOString(),
        priority: todo.priority,
        completed: todo.completed
      };
    })
  }));

  localStorage.setItem('projects', JSON.stringify(serializedProjects));
}

function saveProject(newProject) {
  const projects = getProjects();
  const projectIndex = projects.findIndex(project => project.name === newProject.name);
  if (projectIndex === -1) {
    projects.push(newProject);
    saveProjects(projects);
  }
}

function updateProject(updatedProject) {
  const projects = getProjects();
  const projectIndex = projects.findIndex(project => project.name === updatedProject.name);
  if (projectIndex !== -1) {
    projects[projectIndex] = updatedProject;
    saveProjects(projects);
  }
}

function deleteProject(projectName) {
  let projects = getProjects();
  projects = projects.filter(project => project.name !== projectName);
  saveProjects(projects);
}

function saveTodo(projectName, newTodo) {
  const projects = getProjects();
  const projectIndex = projects.findIndex(p => p.name === projectName);
  if (projectIndex !== -1) {
    projects[projectIndex].todos.push({
      ...newTodo,
      dueDate: newTodo.dueDate.toISOString(), // Save as string
    });
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}


function deleteTodo(projectName, todoTitle) {
  const projects = getProjects();
  const projectIndex = projects.findIndex(project => project.name === projectName);
  if (projectIndex !== -1) {
    const todos = projects[projectIndex].todos;
    const updatedTodos = todos.filter(todo => todo.title !== todoTitle);
    projects[projectIndex].todos = updatedTodos;
    saveProjects(projects);
  }
}

function initializeStorage() {
  let projects = getProjects();
  let hasDefaultProject = projects.some(project => project.name === 'Default Project');

  // Only create the default project and todo if they don't already exist
  if (!hasDefaultProject) {
    const defaultTodo = new TodoItem('Sample Todo', 'Description', new Date(), 'High');
    const defaultProject = new Project('Default Project');
    defaultProject.addTodo(defaultTodo);
    projects.push(defaultProject.toObject()); // Use the toObject method to ensure correct format
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}


export { getProjects, saveProject, updateProject, deleteProject, saveTodo, deleteTodo, initializeStorage };

  

  
  
  
