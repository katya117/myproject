import { Directive, ElementRef, HostListener, Input } from "@angular/core";
// При нажатии на radio появляется подсветка элементов таблицы
@Directive({
  selector: "[appcolortable]"
})
export class ColorDirective {

  constructor(private element: ElementRef) { }


  @Input("appcolortable") setColor: string;

  @HostListener("mouseenter") onMouseEnter(): void {
    this.colortable(this.setColor || "white");
  }

  @HostListener("mouseleave") onMouseLeave(): void {
    this.colortable(null);
  }

  private colortable(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
