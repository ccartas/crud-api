import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
<<<<<<< HEAD
import { TodoListComponent } from './todo/list-todo/list-todo.component';
import { ChangeTodoComponent } from './todo/change-todo/change-todo.component';

=======
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
<<<<<<< HEAD
    AddTodoComponent,
    TodoListComponent,
    ChangeTodoComponent
=======
    AddTodoComponent
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
