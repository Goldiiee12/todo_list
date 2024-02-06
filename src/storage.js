//storage.js
import Project from './Project';
import Todo from './Todo';

const Storage = {
  saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
  },

  loadProjects() {
    const projectsJSON = localStorage.getItem('projects');
    if (projectsJSON) {
      const loadedProjects = JSON.parse(projectsJSON).map(projData => {
        const project = new Project(projData.name);
        projData.todos.forEach(todoData => {
          const todo = new Todo(todoData); // Make sure the Todo constructor accepts an object
          project.addTodo(todo);
        });
        return project;
      });
      // Debug: Log the loaded projects to check their integrity
      console.log('Loaded projects:', loadedProjects);
      return loadedProjects;
    }
    return [];
  }
};

export default Storage;
