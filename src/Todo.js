export default class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = Date.now(); // Simple unique id for demo purposes
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  // Additional methods for editing the todo details
}


