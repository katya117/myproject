import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditComponent } from "./editreacriveform";
import { ReactiveComponent } from "./reactiveforms.component";

const routes: Routes = [
  { path: " ", component: ReactiveComponent },
  { path: " ", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule { }
