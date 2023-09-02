import { format } from 'date-fns';

class Todo {
  #title = null;
  #description = null;
  #dueDate = null;
  #priority = null;
  #id = null;
  static #globalId = 0;

  constructor(title, description, dueDate, priority) {
    this.#title = title;
    if (description !== '') {
      this.#description = description;
    }
    if (dueDate !== ''){
      this.#dueDate = new Date(dueDate);
    }
    this.#priority = priority;
    this.#id = Todo.#globalId++;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    if (newTitle !== null && newTitle !== undefined && newTitle !== '') {
      this.#title = newTitle;
    }
  }

  get description() {
    return this.#description;
  }

  set description(newDescr) {
    if (newDescr !== null && newDescr !== undefined && newDescr !== '') {
      this.#description = newDescr;
    }
  }

  get dueDate() {
    return this.#dueDate;
  }

  formattedDate() {
    if (this.#dueDate !== null)
      return format(this.#dueDate , 'E d MMM, yyyy');
    else
      return null;
  }

  set dueDate(newDate) {
    if (newDate !== null && newDate !== undefined) {
      this.#dueDate = newDate;
    }
  }

  get priority() {
    return this.#priority;
  }

  formattedPriority() {
    return this.#priority.charAt(0).toUpperCase() + this.#priority.slice(1);
  }

  set priority(newPrio) {
    this.#priority = newPrio;
  }
};

export default Todo;
