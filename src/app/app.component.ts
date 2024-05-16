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








// import { NgModule } from '@angular/core'
// import { BrowserModule } from '@angular/platform-browser'
// import { KanbanModule } from '@syncfusion/ej2-angular-kanban'



// import { Component } from '@angular/core';
// import { CardSettingsModel, SwimlaneSettingsModel } from '@syncfusion/ej2-angular-kanban';
// import { kanbanData } from './datasource';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//     public data: Object[] = kanbanData;
//     public cardSettings: CardSettingsModel = {
//         contentField: 'Summary',
//         headerField: 'Id'
//     };
//     public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'Assignee' };
//     public showForm: boolean = false;
//     addNewTask() {
//       this.showForm = true;
//                console.log('Add new task button clicked');
//           }
// }








import { Component, OnInit } from '@angular/core';
import { DragEventArgs } from '@syncfusion/ej2-angular-kanban';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any[] = [];
  cardSettings = {
    contentField: 'summary',
    headerField: 'id'
  };
  public swimlaneSettings = {
    keyField: 'assignee',
    allowDragAndDrop: true
  };
  showForm = false;

  ngOnInit() {
    this.loadDataFromLocalStorage();
  }

  loadDataFromLocalStorage() {
    this.data = JSON.parse(localStorage.getItem('kanbanData') || '[]');
    console.log('local');
  }

  

  addNewTask() {
    this.showForm = true;
  }


  saveToLocalStorage() {
    localStorage.setItem('kanbanData', JSON.stringify(this.data));
  }


  onActionBegin(args: any): void {
    if (args.requestType === 'cardDragStop') {
      const draggedItem = args.data[0];
      console.log(draggedItem);
      const card = this.data.find(c => c.id === draggedItem.id);
      console.log(draggedItem.id);
      if (card) {
        card.assignee = draggedItem.assignee;
        card.status = draggedItem.status;
        card.summary = draggedItem.summary;
        this.saveToLocalStorage();
      }
    }
  }
}


