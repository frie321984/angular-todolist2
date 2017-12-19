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
  isEditMode: boolean;
  isShowJoke = false;

  constructor(private todoService: TodolistService) { }

  ngOnInit() {
    this.isShowJoke = false;
    this.isEditMode = false;
  }

  clearInput() {
    console.log('clear');
    this.selectedIndex = null;
    this.isEditMode = false;
    this.inputText = '';
    this.isShowJoke = false;
  }

  handleChange() {
    if (this.isEditMode) {
      this.todoService.edit(this.selectedIndex, this.inputText);
    } else {
      this.todoService.add(this.inputText);
    }
    this.clearInput();
  }

  selectTodo(index: number) {
    console.log('select #' + index);
    this.selectedIndex = index;
    this.isEditMode = true;
    this.inputText = this.todoService.getTodo(index);
    this.isShowJoke = false;
  }

  removeTodo(index: number) {
    this.todoService.remove(index);
    this.isShowJoke = true;
  }

}
