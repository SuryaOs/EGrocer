import { Injectable } from '@angular/core';
import { ICategoryService } from './category-i.service';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category-i';
import { BaseClientProxy } from 'src/app/core/rest-proxies/baseclient.proxy';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseClientProxy implements ICategoryService {

  constructor(public http: HttpClient) {
    super(http);
  }
  getAllCategory(): Observable<ICategory[]>{
        return this.baseGet<ICategory[]>(`${environment.apiUrl}/category`);
  }
}
