import TodoItem from './TodoItem';
export default class Project {
  constructor(name, todos = []) {
    this.name = name;
    // Ensure todos are instances of TodoItem
    this.todos = todos.map(todo => 
      todo instanceof TodoItem ? todo : new TodoItem(todo.title, todo.description, new Date(todo.dueDate), todo.priority)
    );
  }

  addTodo(todo) {
    if (!this.todos.some(t => t.title === todo.title)) {
      this.todos.push(todo);
    } else {
      console.warn('A todo with this title already exists in the project.');
    }
  }

  // Include a method to remove a todo
  removeTodo(todoTitle) {
    this.todos = this.todos.filter(todo => todo.title !== todoTitle);
  }

  // Add method to update a todo item within the project
  updateTodo(updatedTodo) {
    const index = this.todos.findIndex(todo => todo.title === updatedTodo.title);
    if (index !== -1) {
      this.todos[index].update(updatedTodo.title, updatedTodo.description, updatedTodo.dueDate, updatedTodo.priority);
    }
  }

  // Serialize project for storage
  toObject() {
    return {
      name: this.name,
      todos: this.todos.map(todo => todo.toObject())
    };
  }

  // Other methods for project...
}
  