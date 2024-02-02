// path: /src/appLogic.js
// This module contains the core application logic

import Project from './Project';
import Todo from './Todo';
import Storage from './storage';

const AppLogic = (() => {
    const projects = Storage.loadProjects();

    const addProject = (name) => {
        const newProject = new Project(name);
        projects.push(newProject);
        Storage.saveProjects(projects);
    };

    const addTodoToProject = (projectName, todoData) => {
        const project = projects.find(p => p.name === projectName);
        if (project) {
            const { title, description, dueDate, priority } = todoData;
            const newTodo = new Todo(title, description, dueDate, priority);
            project.addTodo(newTodo);
            Storage.saveProjects(projects);
        }
    };

    const removeTodoFromProject = (projectName, todoTitle) => {
        const project = projects.find(p => p.name === projectName);
        if (project) {
            project.removeTodo(todoTitle);
            Storage.saveProjects(projects);
        }
    };

    // More logic for editing todos, toggling completion, etc.

    return { addProject, addTodoToProject, removeTodoFromProject };
})();

export default AppLogic;
