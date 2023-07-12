import { environment } from "src/environments/environment";
import { IFileUploadService } from "./file-upload-i.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FileUploadService implements IFileUploadService {
  constructor(public http: HttpClient) {}

  public uploadImage(file: any, featureName: string) {
    const formData: FormData = new FormData();

    formData.append("file", file);
    formData.append("featureName", featureName);

    return this.http.post(`${environment.apiUrl}/upload`, formData);
  }
}
