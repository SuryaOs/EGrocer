import { Injectable } from '@angular/core';
import { IFileUploadService } from './file-upload-i.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadMockService implements IFileUploadService {

  constructor() { }
  uploadImage(file: any, featureName: any) {
    return of("Sucessfully uploaded");
  }
}
