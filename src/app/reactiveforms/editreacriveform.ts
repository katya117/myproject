import { animate, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Car } from "../car";
import { checkDateValidator } from "./checkdate";
import { misMatchValidator } from "./mis-match";

@Component({
  selector: "app-edit",
  templateUrl: "editForm.html",
  styleUrls: ["./reactiveforms.component.css"],
  animations: [
    trigger("reactiveforms", [
      transition("void => *", [
        style({ transform: "scale3d(.3, .3, .3)" }),
        animate(100),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  get getregister(): { [key: string]: AbstractControl } { return this.editForm.controls; }
  get getcar(): AbstractControl { return this.editForm.controls.car; }
  submitted = false;
  editForm: FormGroup;
  @Input() edit: Car[];
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() editChanging: number;
  @Input() editNumber: number;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      car: this.formBuilder.group({
        brand: [this.edit[this.editNumber].brand, [Validators.required,
        Validators.pattern(/^[A-z0]*$/)]],
        name: [this.edit[this.editNumber].name, [Validators.required,
        Validators.pattern(/^[A-z0]*$/)]],
        transmission: [this.edit[this.editNumber].transmission, [Validators.required,
        Validators.pattern(/^[A-z0]*$/)]],
      }, {
        validator: misMatchValidator("brand", "name"),
      }),
      date: [new Date(this.edit[this.editNumber].data), [Validators.required, checkDateValidator()]],
      price: [this.edit[this.editNumber].price, [Validators.required,
      Validators.pattern(/^[0-9]+(?!.)/),
      ]],
    });
  }
  onSubmit(brand: string, name: string, transmission: string, data: Date, price: number): void {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.edit[this.editNumber].brand = brand;
    this.edit[this.editNumber].name = name;
    this.edit[this.editNumber].transmission = transmission;
    this.edit[this.editNumber].data = data;
    this.edit[this.editNumber].price = price;
  }

  close(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
