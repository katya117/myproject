import { animate, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Car } from "../car";
import { checkDateValidator } from "./checkdate";
import { misMatchValidator } from "./mis-match";


@Component({
  selector: "app-reactiveforms",
  templateUrl: "reactiveforms.component.html",
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

export class ReactiveComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() add: Car[];
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      car: this.formBuilder.group({
        brand: ["", [Validators.required,
        Validators.pattern(/^[A-z0]*$/)]],
        name: ["", [Validators.required,
        Validators.pattern(/^[A-z0]*$/)]],
        transmission: ["", [Validators.required,
        Validators.pattern(/^[A-z0]*$/)]],
      }, {
        validator: misMatchValidator("brand", "name"),
      }),
      date: ["", [Validators.required, checkDateValidator()]],
      price: ["", [Validators.required,
      Validators.pattern(/^[0-9]+(?!.)/)]],
    });
  }
  onSubmit(brand: string, name: string, transmission: string, data: Date, price: number): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.add.push(new Car(brand, name, transmission, new Date(data), price));
  }
  get getregister(): { [key: string]: AbstractControl } { return this.registerForm.controls; }
  get getcar(): AbstractControl { return this.registerForm.controls.car; }
  close(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
