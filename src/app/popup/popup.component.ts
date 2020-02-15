import { animate, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Car } from "../car";
@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.css"],
  animations: [
    trigger("popup", [
      transition("void => *", [
        style({ transform: "scale3d(.3, .3, .3)" }),
        animate(100),
      ]),
    ]),
  ], changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() delete: Car[];
  @Input() editChanging: number;
  @Input() editNumber: number;
  ngOnInit(): void { }

  close(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  confirm(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.delete.splice(this.editNumber, 1);
  }
}
