import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() data!: any[];
  @Input() columns!: any[];

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  editItem(item: any) {
    this.edit.emit(item.id)
  }

  deleteItem(item: any) {
    this.delete.emit(item.id);
  }
}
