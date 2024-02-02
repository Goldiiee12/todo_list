// path: /src/Project.js
// Manages a collection of Todo items

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoTitle) {
    this.todos = this.todos.filter(todo => todo.title !== todoTitle);
  }

  // More methods will be added here for editing and retrieving todos
}

export default Project;
