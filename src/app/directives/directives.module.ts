import { NgModule } from "@angular/core";
import { ColorDirective } from "./color.directive";
import { MaxLengthDirective } from "./length.directive";
@NgModule({
  declarations: [ ColorDirective ,  MaxLengthDirective  ],
  exports: [ ColorDirective ,  MaxLengthDirective   ]
})
export class DirectiveModule { }
