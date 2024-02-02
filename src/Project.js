export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

  // Additional methods such as finding a todo, updating its status, etc.
}
