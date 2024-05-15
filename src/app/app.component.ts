// import { KanbanModule } from '@syncfusion/ej2-angular-kanban'



// import { Component } from '@angular/core';
// import { CardSettingsModel, SwimlaneSettingsModel } from '@syncfusion/ej2-angular-kanban';
// import { kanbanData } from './datasource';

// @Component({
// imports: [
        
//         KanbanModule
//     ],


// standalone: true,
//   selector: 'app-root',
//   template: `<button (click)="addNewTask()">Add New Task</button>
//             <ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings' [swimlaneSettings]='swimlaneSettings'>
//                 <e-columns>
//                   <e-column headerText='To do' keyField='Open'></e-column>
//                   <e-column headerText='In Progress' keyField='InProgress'></e-column>
//                   <e-column headerText='Testing' keyField='Testing'></e-column>
//                   <e-column headerText='Done' keyField='Close'></e-column>
//                 </e-columns>
//             </ejs-kanban>`
// })
// export class AppComponent {
//     public data: Object[] = kanbanData;
//     public cardSettings: CardSettingsModel = {
//         contentField: 'Summary',
//         headerField: 'Id'
//     };
//     public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'Assignee' };
//     addNewTask() {
//         // Logic to add a new task
//         console.log('Add new task button clicked');
//     }
// }








import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { KanbanModule } from '@syncfusion/ej2-angular-kanban'



import { Component } from '@angular/core';
import { CardSettingsModel, SwimlaneSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
imports: [
        
        KanbanModule
    ],


standalone: true,
  selector: 'app-root',
  template: `
    <button (click)="showForm = true">Add New Task</button>
    <ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings' [swimlaneSettings]='swimlaneSettings'>
      <e-columns>
        <e-column headerText='To do' keyField='Open'></e-column>
        <e-column headerText='In Progress' keyField='InProgress'></e-column>
        <e-column headerText='Testing' keyField='Testing'></e-column>
        <e-column headerText='Done' keyField='Close'></e-column>
      </e-columns>
    </ejs-kanban>
    <app-task-form *ngIf="showForm"></app-task-form>
  `
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'Assignee' };
    public showForm: boolean = false;
    // addNewTask() {
    //            console.log('Add new task button clicked');
    //       }
}