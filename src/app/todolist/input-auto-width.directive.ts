import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputAutoWidth]'
})
export class InputAutoWidthDirective {
  inputBox: HTMLInputElement;

  constructor(elementRef: ElementRef) {
    this.inputBox = elementRef.nativeElement;
  }

  @HostListener('focus')
  getFocus() {
    const currentSize = this.inputBox.offsetWidth + 100;
    this.inputBox.style.width = currentSize + 'px';
  }
  @HostListener('blur')
  looseFocus() {
    const currentSize = this.inputBox.offsetWidth - 100;
    this.inputBox.style.width = currentSize + 'px';
  }


}
