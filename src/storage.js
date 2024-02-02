// path: /src/storage.js
// Utility functions for local storage operations

class Storage {
    static saveProjects(projects) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  
    static loadProjects() {
      const projectsData = localStorage.getItem('projects');
      if (projectsData) {
        return JSON.parse(projectsData).map(projectData => {
          const project = new Project(projectData.name);
          projectData.todos.forEach(todoData => {
            const todo = new Todo(
              todoData.title,
              todoData.description,
              todoData.dueDate,
              todoData.priority,
              todoData.notes,
              todoData.checklist
            );
            project.addTodo(todo);
          });
          return project;
        });
      }
      // If there's no saved data, return a default project
      return [new Project('Default')];
    }
  }
  
  export default Storage;
  