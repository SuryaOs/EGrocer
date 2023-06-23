import { Component, OnInit, Inject, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../models/category-i';
import { CategoryServiceToken, ICategoryService } from '../../service/category-i.service';

@Component({
  selector: 'app-category',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryComponent implements OnInit {
  @Output() selectedCategory = new EventEmitter<number>();

  public category$!: Observable<ICategory[]>;

  constructor(
    @Inject(CategoryServiceToken)
    private _categoryService: ICategoryService,
  ) { }

  ngOnInit() {
    this.category$ = this._categoryService.getAllCategory();
  }

  public onCategorySelect(categoryId: number): void {
    this.selectedCategory.emit(categoryId);
  }
}
