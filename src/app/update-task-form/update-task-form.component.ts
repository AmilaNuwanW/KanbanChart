import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-task-form',
  templateUrl: './update-task-form.component.html',
  styleUrls: ['./update-task-form.component.css'],
})
export class UpdateTaskFormComponent implements OnInit, OnChanges {
  @Input() currentTask: any;
  @Output() formSubmitted = new EventEmitter<void>();

  taskForm: FormGroup = new FormGroup({});
  statusOptions: string[] = ['To do', 'In Progress', 'Testing', 'Done'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      id: [this.currentTask?.id || '', Validators.required],
      assignee: [this.currentTask?.assignee || '', Validators.required],
      status: [this.currentTask?.status || '', Validators.required],
      summary: [this.currentTask?.summary || '', Validators.required],
    });
  }
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentTask'] && changes['currentTask'].currentValue) {
      this.taskForm.patchValue(this.currentTask);
    }
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const formData = this.taskForm.value;
      this.saveToLocalStorage(formData);
      this.formSubmitted.emit();
      this.taskForm.reset();
      window.location.reload();
    }
  }

  saveToLocalStorage(data: any) {
    let kanbanData = JSON.parse(localStorage.getItem('kanbanData') || '[]');
    const index = kanbanData.findIndex((task: any) => task.id === data.id);
    if (index !== -1) {
      kanbanData[index] = data;
    } else {
      kanbanData.push(data);
    }
    localStorage.setItem('kanbanData', JSON.stringify(kanbanData));
  }
}
