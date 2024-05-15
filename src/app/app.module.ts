import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the KanbanModule for the Kanban component
import { KanbanAllModule, KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { AppComponent }  from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskFormModule } from './task-form/task-form.module';
import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Import the platformBrowserDynamic module

@NgModule({
  //declaration of ej2-angular-kanban module into NgModule
  declarations: [AppComponent],
  imports:      [ BrowserModule, KanbanModule,KanbanAllModule,ReactiveFormsModule, CommonModule,TaskFormModule,RouterModule ],
  
  bootstrap:    [AppComponent] // Remove AppComponent from the bootstrap array
})
export class AppModule { }

