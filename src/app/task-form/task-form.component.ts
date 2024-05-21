import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
    @Output() formSubmitted = new EventEmitter<void>();
  taskForm: FormGroup = new FormGroup({});
  statusOptions: string[] = ['To do', 'In Progress', 'Testing', 'Done'];


    constructor(private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.taskForm = this.formBuilder.group({
            id: ['', Validators.required],
            assignee: ['', Validators.required],
            status: ['', Validators.required],
            summary: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.taskForm.valid) {
            const formData = this.taskForm.value;
            // Save the form data to the kanbanData array
            // kanbanData.push(formData);
            this.saveToLocalStorage(formData);
            console.log('submitted');
            this.formSubmitted.emit();
            // Optionally, you can reset the form after submission
            this.taskForm.reset();
            window.location.reload();
        }
    }
    saveToLocalStorage(data: any) {
        let kanbanData = JSON.parse(localStorage.getItem('kanbanData') || '[]');
        kanbanData.push(data);
        localStorage.setItem('kanbanData', JSON.stringify(kanbanData));
      }

    
}
