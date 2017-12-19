import { Injectable } from '@angular/core';

@Injectable()
export class TodolistService {

  todos: string[] = [];

  constructor() {
    this.todos.push('foo');
    this.todos.push('bar');
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
    this.todos.push(text);
  }

  edit(index: number, text: string) {
    if (!text || text.length <= 0) {
      console.log('Todo was empty.');
      return;
    }
    console.log('edit todo #' + index);
    this.todos[index] = text;
  }

  getTodos(): string[] {
    return this.todos;
  }

  getTodo(index: number): string {
    return this.todos[index];
  }
}
