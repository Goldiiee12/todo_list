// Import the necessary modules.
import Project from './Project';
import Todo from './Todo';
import Storage from './storage';

// App logic module.
const AppLogic = (() => {
  let projects = Storage.loadProjects() || [new Project('Default')];

  const getProjects = () => projects;
  
  const getProjectByName = (name) => projects.find(project => project.name === name);

  const addProject = (name) => {
    const newProject = new Project(name);
    projects.push(newProject);
    Storage.saveProjects(projects);
    return newProject;
  };

  const addTodo = (projectName, title, description, dueDate, priority) => {
    const project = getProjectByName(projectName);
    if (project) {
      const newTodo = new Todo(title, description, dueDate, priority);
      project.addTodo(newTodo);
      Storage.saveProjects(projects);
      return newTodo;
    }
    return null;
  };

  const editTodo = (projectName, todoId, updatedData) => {
    const project = getProjectByName(projectName);
    if (project) {
      const todo = project.todos.find(todo => todo.id === todoId);
      if (todo) {
        Object.assign(todo, updatedData);
        Storage.saveProjects(projects);
      }
    }
  };
  
  const deleteTodo = (projectName, todoId) => {
    const project = getProjectByName(projectName);
    if (project) {
      project.todos = project.todos.filter(todo => todo.id !== todoId);
      Storage.saveProjects(projects);
    }
  };

  // Export the public methods.
  return { getProjects, addProject, addTodo, getProjectByName, editTodo, deleteTodo };
})();

export default AppLogic;


