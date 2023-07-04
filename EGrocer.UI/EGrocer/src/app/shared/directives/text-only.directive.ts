import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[textOnly]'
})
export class TextOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // Remove any non-alphabetic characters and update the input value
    inputElement.value = inputValue.replace(/[^A-Za-z ]/g, '').trim();
  }
}
