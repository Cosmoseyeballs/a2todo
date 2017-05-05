import { Init } from './init-todus';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService extends Init{

  constructor() { 
    super();
    console.log("TodoService initialized...")
    this.loade();
  }
  getTodoes(){
       var todos = JSON.parse(localStorage.getItem("todos"));
       return todos;
  }
  addTodo(todo){
      console.log("addTodos")
      console.log("addTodos get todos")
       var todos = JSON.parse(localStorage.getItem("todos"));
       console.log("addTodos add todo")
       todos.push(todo);
       console.log("addTodos setItem todos")
       localStorage.setItem("todos",JSON.stringify(todos));
       console.log("addTodos",todos)
  }
  deleteTodo(id){
    var todos = JSON.parse(localStorage.getItem("todos"));
    for(let t = 0; t<todos.length; t++){
        if(todos[t].id==id){
          todos.splice(t,1);
        }
    }

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  updateTodo(todo){
        this.deleteTodo(todo.id);
        this.addTodo(todo);
  }
}
