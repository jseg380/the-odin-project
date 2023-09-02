import { isToday, isFuture } from 'date-fns';

class Project {
  #todoArray = null;
  #name = null;

  constructor(name) {
    this.#todoArray = [];
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  getById(id) {
    return this.#todoArray.filter(todoEl => todoEl.id === Number(id))[0];
  }

  push(todo) {
    this.#todoArray.push(todo);
  }

  remove(id) {
    let index = -1;

    this.#todoArray.filter((todoEl, i) => {
      if (todoEl.id === Number(id)) {
        index = i;
        return true;
      }
      return false;
    });

    if (index >= 0) {
      this.#todoArray.splice(index, 1);
    }
  }

  inboxTodos() {
    return this.#todoArray;
  }

  todayTodos() {
    return this.#todoArray.filter(el => {
      return el.dueDate !== null && isToday(el.dueDate);
    });
  }

  upcomingTodos() {
    return this.#todoArray.filter(el => {
      return el.dueDate !== null && isFuture(el.dueDate);
    });
  }

  todoArray(filter) {
    switch (filter.toLowerCase()) {
      case 'inbox':
        return this.inboxTodos();
      case 'today':
        return this.todayTodos();
      case 'upcoming':
        return this.upcomingTodos();
      default:
        console.log('Filter not valid!', filter);
        break;
    }
  }
}

export default Project;
