import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  @Input() task: any;
  @Output() submit = new EventEmitter<any>();

  onSubmit(formValues: any) {
    this.submit.emit({...this.task,...formValues });
  }
}
