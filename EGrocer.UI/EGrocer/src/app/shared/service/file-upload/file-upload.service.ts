import { environment } from "src/environments/environment";
import { IFileUploadService } from "./file-upload-i.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService implements IFileUploadService {
  constructor(public http: HttpClient) {
  }

 public uploadImage(file: any, featureName: string) {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('featureName', featureName)

    this.http.post(`${environment.apiUrl}/upload`, formData)
      .subscribe(
        response => {
          console.log('Upload successful!', response);
        },
        error => {
          console.error('Error occurred during upload:', error);
        }
      );

  }
}
