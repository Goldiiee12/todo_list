// Todo.js
import { v4 as uuidv4 } from 'uuid';
import { formatISO, parseISO, isValid } from 'date-fns';

export default class Todo {
  constructor(title, description, dueDate, priority) {
    // Simple validations for demonstration purposes
    if (!title) throw new Error('Title is required for creating a todo.');
    if (!description) throw new Error('Description is required for creating a todo.');
    if (!dueDate) throw new Error('Due date is required for creating a todo.');
    if (!priority) throw new Error('Priority is required for creating a todo.');

    if (!isValid(parseISO(dueDate))) {
      throw new Error('Invalid date format for dueDate. Please use ISO format.');
    }

    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = formatISO(parseISO(dueDate));
    this.priority = priority;
    this.completed = false;
  }

  toggleComplete() {
    if (!Object.isFrozen(this)) {
      this.completed = !this.completed;
    } else {
      console.error('Cannot toggle complete on a frozen object.');
    }
  }

  // Method to update todo details
  editDetails(updatedDetails) {
    if (!Object.isFrozen(this)) {
      Object.keys(updatedDetails).forEach((key) => {
        if (key in this && key === 'dueDate' && isValid(parseISO(updatedDetails[key]))) {
          this[key] = formatISO(parseISO(updatedDetails[key]));
        } else if (key in this) {
          this[key] = updatedDetails[key];
        } else {
          console.error(`Attempted to update non-existent property '${key}' on Todo.`);
        }
      });
    } else {
      console.error('Cannot edit details on a frozen object.');
    }
  }
  
  // No need for getFormattedDueDate if we're always storing dueDate in ISO format
}


