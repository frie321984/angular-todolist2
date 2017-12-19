import { Component, OnInit } from '@angular/core';
import { TodolistService } from './todolist.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  inputText = '';
  selectedIndex: number;
  isShowJoke = false;

  constructor(private todoService: TodolistService) { }

  ngOnInit() {
    this.isShowJoke = false;
  }

  clearInput() {
    console.log('clear');
    this.selectedIndex = null;
    this.inputText = '';
    this.isShowJoke = false;
  }

  selectTodo(index: number) {
    console.log('select #' + index);
    this.selectedIndex = index;
    this.inputText = this.todoService.getTodo(index);
    this.isShowJoke = false;
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
    this.isShowJoke = true;
  }

  addTodo() {
    this.todoService.addTodo(this.inputText);
    this.isShowJoke = false;
    this.inputText = '';
  }

}
