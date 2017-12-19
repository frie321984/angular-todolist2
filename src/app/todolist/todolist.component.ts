import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  inputText: string;
  selectedIndex: number;

  todos: string[] = [];
  isShowJoke = false;

  constructor() { }

  ngOnInit() {
    this.todos.push('foo');
    this.todos.push('bar');
    this.isShowJoke = false;
  }

  selectTodo(index: number) {
    console.log('select #' + index);
    this.selectedIndex = index;
    this.inputText = this.todos[index];
  }

  removeTodo(index: number) {
    console.log('removing #' + index);
    this.todos.splice(index, 1);
    this.isShowJoke = true;
  }

  addTodo(text: string) {
    console.log('add new todo ' + text);
    this.todos.push(text);
    this.isShowJoke = false;
  }

}
