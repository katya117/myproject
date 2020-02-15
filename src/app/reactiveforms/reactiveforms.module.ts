import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DirectiveModule } from "../directives/directives.module";
import { EditComponent } from "./editreacriveform";
import { FormRoutingModule } from "./form.routing";
import { ReactiveComponent } from "./reactiveforms.component";
@NgModule({
  imports: [ReactiveFormsModule, DirectiveModule, FormRoutingModule, CommonModule],
  declarations: [EditComponent, ReactiveComponent],
  exports: [ReactiveFormsModule, EditComponent, ReactiveComponent]
})
export class ReactiveModule { }
