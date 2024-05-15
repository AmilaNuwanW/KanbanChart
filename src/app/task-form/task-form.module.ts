import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule// Add TaskFormComponent to the imports array
  ],
  declarations: [TaskFormComponent], // Remove TaskFormComponent from the declarations array
  exports: [TaskFormComponent]
})
export class TaskFormModule { }
