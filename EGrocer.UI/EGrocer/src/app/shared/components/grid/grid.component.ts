import { Component, Input } from '@angular/core';
import { IGridColumn } from '../../interfaces/grid-column-i';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() dataSource!: any[];
  @Input() columns!: IGridColumn[];

  // Get the displayed columns from the input columns
  get displayedColumns(): string[] {
    return [...this.columns.map(column => column.propertyName), 'actions']; // Include 'actions' column
  }

  editItem(item: any){
    console.log(item);
  }

  deleteItem(item: any){
    console.log(item);
  }
}
