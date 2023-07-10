import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() data!: any[];
  @Input() columns!: any[];

  editItem(item: any) {
    // Handle edit logic here
    console.log('Edit item:', item);
  }

  deleteItem(item: any) {
    // Handle delete logic here
    console.log('Delete item:', item);
  }
}
