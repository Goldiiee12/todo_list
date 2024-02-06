export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    // Check if the todo with the same ID already exists
    const exists = this.todos.some(existingTodo => existingTodo.id === todo.id);
    if (!exists) {
      this.todos.push(todo);
    } else {
      // Handle the case where a todo with the same ID exists
      console.error('A todo with this ID already exists.');
    }
  }

  removeTodo(todoId) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

  // Additional methods such as finding a todo, updating its status, etc.
}
