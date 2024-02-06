// appLogic.js
import Project from './Project';
import Todo from './Todo';
import Storage from './storage';

const AppLogic = (() => {
    let projects = Storage.loadProjects() || [];

    const initProjects = (defaultProjectName = 'Default') => {
        if (projects.length === 0) {
            const defaultProject = new Project(defaultProjectName);
            projects.push(defaultProject);
            Storage.saveProjects(projects);
        }
        // Debug: Log the projects to see if 'Default Project' exists
        console.log('Projects loaded:', projects);
        return projects;
    };

    // Load or initialize projects when the module is imported
    initProjects();

    const getProjects = () => projects;

    const getProjectByName = (name) => {
        return projects.find(project => project.name === name);
    };

  const addProject = (name) => {
    if (getProjectByName(name)) {
      return false; // A project with the same name exists
    }
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

  const toggleTodoComplete = (projectName, todoId) => {
    const project = getProjectByName(projectName);
    if (project) {
      const todo = project.todos.find(t => t.id === todoId);
      if (todo) {
        todo.completed = !todo.completed; // Toggle the completed status
        Storage.saveProjects(projects);
      }
    }
  };

  // Load or initialize projects when the module is imported
  initProjects();

  return {
    getProjects,
    addProject,
    addTodo,
    getProjectByName,
    editTodo,
    deleteTodo,
    toggleTodoComplete,
    initProjects // Make sure to export the initProjects function
};
})();

export default AppLogic;