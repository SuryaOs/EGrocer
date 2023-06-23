import { InjectionToken } from "@angular/core";

export const FileUploadServiceToken = new InjectionToken<IFileUploadService>(
  'FileUploadServiceToken'
);

export interface IFileUploadService{
  uploadImage(file:any, featureName: string): any;
}
