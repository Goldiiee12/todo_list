export default class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    // Store dates as ISO strings
    this.dueDate = dueDate instanceof Date ? dueDate.toISOString() : dueDate;
    this.priority = priority;
  }

  update(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    // Ensure updated date is stored as ISO string
    this.dueDate = dueDate instanceof Date ? dueDate.toISOString() : dueDate;
    this.priority = priority;
  }

  toObject() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate, // dueDate should be a string
      priority: this.priority
    };
  }

  // Other methods for todo item...
}

  
  