import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the KanbanModule for the Kanban component
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { AppComponent }  from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';


@NgModule({
  //declaration of ej2-angular-kanban module into NgModule
  imports:      [ BrowserModule, KanbanModule,ReactiveFormsModule, CommonModule ],
  declarations: [ AppComponent,TaskFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }