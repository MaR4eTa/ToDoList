import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { TodoItem } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService) {
    this.todoItems = todoService.getTodoItems();
  }

  // Implement functions for sorting, editing, and deleting items.
}
