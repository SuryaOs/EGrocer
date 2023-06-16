import { Component, OnInit, Inject  } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category-i';
import { CategoryServiceToken, ICategoryService } from '../service/category-i.service';

@Component({
  selector: 'app-category',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class CategoryComponent implements OnInit {
  category$: Observable<ICategory[]>;

  constructor(
    @Inject(CategoryServiceToken)
    private _categoryService: ICategoryService,
  ) { }

  ngOnInit() {
    this.category$ = this._categoryService.getAllCategory();
  }
}
