import { Component, OnInit } from '@angular/core';

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

  onCardDragStop(args: any) {
    // Find the index of the card that was moved
    const cardIndex = this.data.findIndex(card => card.id === args.data.id);
  
    // Check if the card was found
    if (cardIndex!== -1) {
      // Update the card's status based on the target column
      const newStatus = args.targetKey; // Assuming 'targetKey' contains the new status
      this.data[cardIndex].status = newStatus;
  
      // Save the updated data to local storage
      this.saveToLocalStorage();
    } else {
      console.error('Card not found:', args.data.id);
    }
  }
  

}


