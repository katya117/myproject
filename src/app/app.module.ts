import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent, } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { DirectiveModule } from "./directives/directives.module";
import { HomeComponent } from "./homepage/home";
import { PageNotFoundComponent } from "./not-found";
import { PipeModule } from "./pipes/pipe.module";
import { PopupModule } from "./popup/popup.module";
import { ReactiveModule } from "./reactiveforms/reactiveforms.module";
@NgModule({
  imports: [BrowserAnimationsModule, BrowserModule, ReactiveModule, PopupModule, DirectiveModule, PipeModule, AppRoutingModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, PageNotFoundComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
