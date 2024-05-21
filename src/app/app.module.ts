import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KanbanAllModule, KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { AppComponent }  from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormModule } from './task-form/task-form.module';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateTaskFormModule } from './update-task-form/update-task-form.module';

@NgModule({
  //declaration of ej2-angular-kanban module into NgModule
  declarations: [AppComponent],
  imports:      [ BrowserModule, KanbanModule,KanbanAllModule,ReactiveFormsModule, CommonModule,TaskFormModule,RouterModule,MatDialogModule,UpdateTaskFormModule ],
  
  bootstrap:    [AppComponent] // Remove AppComponent from the bootstrap array
})
export class AppModule { }



