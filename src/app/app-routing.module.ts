import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '.angular/forms';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './todo-list.component';
import { TodoFormComponent } from './todo-form.component';
import { TodoFilterComponent } from './todo-filter.component';
import { TodoService } from './todo.service';
import { DateFilterPipe } from './date-filter.pipe';

const routes: Routes = [];

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TodoListComponent, TodoFormComponent, TodoFilterComponent, DateFilterPipe],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppRoutingModule { }
