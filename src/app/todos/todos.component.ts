import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  editTodoFormId;
  appState = "default";
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodoes();
  }

  addTodo() {
    let id: number = 1;


    if (this.todos.length != 0) {
      id = this.todos[this.todos.length - 1].id + 1;
    }
    let todo = { id: id, text: this.text }
    this.todos.push(todo)
    this._todoService.addTodo(todo);
    this.text = "";
  }

  deleteTodo(id: number) {
    this._todoService.deleteTodo(id);
    this.todos = this._todoService.getTodoes();
  }
  editTodo(todo) {
    this.appState = "editTodo"
    this.editTodoFormId = todo.id;
    this.text = todo.text;
  }

  updateTodo() {
    let todo = { id: this.editTodoFormId, text: this.text }

    this._todoService.updateTodo(todo);
    this.todos = this._todoService.getTodoes();

    this.appState = "default";
    this.text = "";
  }
}
