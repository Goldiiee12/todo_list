import Project from './Project';
import Todo from './Todo';

const Storage = {
    saveProjects(projects) {
      localStorage.setItem('projects', JSON.stringify(projects));
    },
  
    loadProjects() {
      const projectsJSON = localStorage.getItem('projects');
      if (projectsJSON) {
        return JSON.parse(projectsJSON).map(projData => {
          const project = new Project(projData.name);
          projData.todos.forEach(todoData => project.addTodo(new Todo(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.priority
          )));
          return project;
        });
      }
      return [];
    }
  };
  
  export default Storage;
  
  