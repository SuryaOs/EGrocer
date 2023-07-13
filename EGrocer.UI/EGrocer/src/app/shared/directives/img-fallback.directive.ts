import { Directive, ElementRef, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[imageFallback]'
})
export class ImageFallbackDirective {
  constructor(private el: ElementRef) {}

  @HostListener('error') loadFallBackOnError() {
    const element: HTMLImageElement = this.el.nativeElement;
    element.src = `${environment.apiUrl}/images/product/noimage.jpg`
  }
}
