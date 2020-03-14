import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./homepage/aboutcompany";
import { ContactComponent } from "./homepage/contact";
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
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
