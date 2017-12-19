import { Injectable } from '@angular/core';

@Injectable()
export class TodolistService {

  todos: string[] = [];

  constructor() {
    this.todos.push('foo');
    this.todos.push('bar');
  }

  removeTodo(index: number) {
    console.log('removing #' + index);
    this.todos.splice(index, 1);
  }

  addTodo(text: string) {
    if (!text || text.length <= 0) {
      console.log('Todo was empty.');
      return;
    }
    console.log('add new todo ' + text);
    this.todos.push(text);
  }

  getTodos(): string[] {
    return this.todos;
  }

  getTodo(index: number): string {
    return this.todos[index];
  }
}
