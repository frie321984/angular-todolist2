import { Injectable } from '@angular/core';

@Injectable()
export class TodolistService {

  todos: Todo[] = [];

  constructor() {
    this.add('foo');
    this.add('bar');
  }

  remove(index: number) {
    console.log('removing #' + index);
    this.todos.splice(index, 1);
  }

  add(text: string) {
    if (!text || text.length <= 0) {
      console.log('Todo was empty.');
      return;
    }
    console.log('add new todo ' + text);
    this.todos.push(new Todo(text));
  }

  edit(index: number, text: string) {
    if (!text || text.length <= 0) {
      console.log('Todo was empty.');
      return;
    }
    console.log('edit todo #' + index);
    this.todos[index].text = text;
  }

  getTodos(): Todo[] {
    this.sortByPrio();
    return this.todos;
  }

  private sortByPrio() {
    this.todos.sort((todoA, todoB) => {
      const a = todoA.prio;
      const b = todoB.prio;
      if (a === b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
    });
  }

  getTodo(index: number): Todo {
    return this.todos[index];
  }

  rankUp(index: number) {
    this.todos[index].prio++;
  }

  rankDown(index: number) {
    this.todos[index].prio--;
    if (this.todos[index].prio < 1) {
      this.todos[index].prio = 1;
    }
  }
}

export class Todo {
  text: string;
  prio: number;
  constructor(text: string, prio?: number) {
    if (!prio) {
      this.prio = 3;
    }
    this.text = text;
  }
}
