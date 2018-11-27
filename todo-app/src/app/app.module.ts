import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoListComponent } from './todo/list-todo/list-todo.component';
import { ChangeTodoComponent } from './todo/change-todo/change-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    TodoListComponent,
    ChangeTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
