import { Component, OnInit } from '@angular/core';
import { KanbanComponent, DragEventArgs,DialogSettingsModel, DialogEventArgs } from '@syncfusion/ej2-angular-kanban';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentTask: any;
updateTaskForm: boolean = false;
  data: any[] = [];
  cardSettings = {
    contentField: 'summary',
    headerField: 'id',
  };

  public swimlaneSettings = {
    keyField: 'assignee',
    allowDragAndDrop: true
  };

  dialogSettings: any;
  dialogOpen(args: DialogEventArgs): void {
    args.cancel = false;
}
  
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


  saveToLocalStorage(updatedTask: any) {
    const index = this.data.findIndex(task => task.id === updatedTask.id);
    if (index!== -1) {
      this.data[index] = updatedTask;
      localStorage.setItem('kanbanData', JSON.stringify(this.data));
    }
  }
  

  // onCardDragStop(args: any) {
  //   // Find the index of the card that was moved
  //   const cardIndex = this.data.findIndex(card => card.id === args.data.id);
  
  //   // Check if the card was found
  //   if (cardIndex!== -1) {
  //     // Update the card's status based on the target column
  //     const newStatus = args.targetKey; // Assuming 'targetKey' contains the new status
  //     this.data[cardIndex].status = newStatus;
  
  //     // Save the updated data to local storage
  //     this.saveToLocalStorage();
  //   } else {
  //     console.error('Card not found:', args.data.id);
  //   }
    
  // }

  // handleButtonClick(task: any) {
  //   console.log('Button clicked for task:', task);
  //   // You can add any action you want to perform on button click here
  // }
  updateTask(id: any) {
    // Find the task in the data array with the matching ID
    const taskIndex = this.data.findIndex(task => task.id === id);
    console.log('update'+id);
  
    if (taskIndex!== -1) {
      console.log('update');
      // Open the update-task form with the current task data
      this.updateTaskForm = true;
      this.currentTask = this.data[taskIndex];
    } else {
      console.error(`Task with ID ${id} not found.`);
    }
  }

  deleteTask(id: any) {
    // Retrieve the data from local storage
    let data = JSON.parse(localStorage.getItem('kanbanData') || '[]');
  
    // Find the index of the task with the given id
    const index = data.findIndex((task: any) => task.id === id);
  
    // If the task is found, remove it from the array
    if (index !== -1) {
      data.splice(index, 1);
  
      // Save the updated data back to local storage
      localStorage.setItem('kanbanData', JSON.stringify(data));
    }
    window.location.reload();
  }
}



// import { Component, OnInit } from '@angular/core';
// import { DialogEventArgs } from '@syncfusion/ej2-angular-kanban';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   data: any[] = [];
//   cardSettings = {
//     contentField: 'summary',
//     headerField: 'id',
//   };

//   public swimlaneSettings = {
//     keyField: 'assignee',
//     allowDragAndDrop: true
//   };

//   dialogSettings: any;
//   showForm = false;
//   showUpdateForm = false;
//   selectedTask: any = null;

//   ngOnInit() {
//     this.loadDataFromLocalStorage();
//   }

//   loadDataFromLocalStorage() {
//     this.data = JSON.parse(localStorage.getItem('kanbanData') || '[]');
//   }

//   addNewTask() {
//     this.showForm = true;
//   }

//   saveToLocalStorage() {
//     localStorage.setItem('kanbanData', JSON.stringify(this.data));
//   }

//   onCardDragStop(args: any) {
//     const cardIndex = this.data.findIndex(card => card.id === args.data.id);

//     if (cardIndex !== -1) {
//       const newStatus = args.targetKey;
//       this.data[cardIndex].status = newStatus;
//       this.saveToLocalStorage();
//     } else {
//       console.error('Card not found:', args.data.id);
//     }
//   }

//   updateTask(id: any) {
//     const taskIndex = this.data.findIndex(task => task.id === id);

//     if (taskIndex !== -1) {
//       this.selectedTask = { ...this.data[taskIndex] };
//       this.showUpdateForm = true;
//     } else {
//       console.error(`Task with ID ${id} not found.`);
//     }
//   }

//   handleTaskUpdate(updatedTask: any) {
//     const taskIndex = this.data.findIndex(task => task.id === updatedTask.id);

//     if (taskIndex !== -1) {
//       this.data[taskIndex] = updatedTask;
//       this.saveToLocalStorage();
//       this.showUpdateForm = false;
//       this.selectedTask = null;
//     } else {
//       console.error(`Task with ID ${updatedTask.id} not found.`);
//     }
//   }

//   closeUpdateForm() {
//     this.showUpdateForm = false;
//     this.selectedTask = null;
//   }
// }

