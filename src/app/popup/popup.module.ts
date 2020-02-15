import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupComponent  } from "./popup.component";

@NgModule({
    imports:      [ BrowserModule, BrowserAnimationsModule ],
  declarations: [ PopupComponent  ],
  exports: [PopupComponent, BrowserModule, BrowserAnimationsModule   ]
})
export class PopupModule { }
