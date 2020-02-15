import { Directive, ElementRef, HostListener, Input } from "@angular/core";
// Директива для определения максимальной длины строки ( в данном случае цены )
@Directive({
  selector: "[maxLength]"
})
export class MaxLengthDirective {
  @Input()
  maxLength: number;

  constructor(private element: ElementRef) { }

  @HostListener("input") onInput(event: void): void {
    const length = this.element.nativeElement.value ? this.element.nativeElement.value.length : 0;

    if (length > this.maxLength) {
      this.element.nativeElement.value = this.element.nativeElement.value.substr(0, length - 1);
    }
  }
}
