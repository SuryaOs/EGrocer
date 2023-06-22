import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category-page',
  templateUrl: './product-category-page.component.html',
  styleUrls: ['./product-category-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoryPageComponent implements OnInit {
  public selectedCategoryId: number;

  constructor() { }

  ngOnInit() {
  }

}