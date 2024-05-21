import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTaskFormComponent } from './update-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule// Add TaskFormComponent to the imports array
  ],
  declarations: [UpdateTaskFormComponent], // Remove TaskFormComponent from the declarations array
  exports: [UpdateTaskFormComponent]
})
export class UpdateTaskFormModule { }
