import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./homepage/home";
import { PageNotFoundComponent } from "./not-found";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [{
      path: "register",
      loadChildren: "./reactiveforms/reactiveforms.module#ReactiveModule"
    }, {
      path: "edit",
      loadChildren: "./reactiveforms/reactiveforms.module#ReactiveModule"
    },
    ]
  },
  { path: "**", component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
