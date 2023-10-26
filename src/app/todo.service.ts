import { Injectable } from '@angular/core';
import { TodoItem } from './todo.model';

@Injectable()
export class TodoService {
  private todoItems: TodoItem[] = [];

  getTodoItems(): TodoItem[] {
    return this.todoItems;
  }

  addTodoItem(todo: TodoItem): void {
    this.todoItems.push(todo);
  }

  updateTodoItem(index: number, todo: TodoItem): void {
    this.todoItems[index] = todo;
  }

  deleteTodoItem(index: number): void {
    this.todoItems.splice(index, 1);
  }
}
