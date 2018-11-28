import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { ChangeTodoComponent } from './todo/change-todo/change-todo.component';
import { OverviewComponent } from './overview/overview.component';
import { TodoLabelDirective } from './todo/todo-list/todo-list.directive';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LettersOnlyDirective } from './common/directives/only-letters.directive';
import { RTSearchComponent } from './common/components/rtsearch/rtsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    TodoListComponent,
    ChangeTodoComponent,
    OverviewComponent,
    TodoLabelDirective,
    LettersOnlyDirective,
    RTSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
