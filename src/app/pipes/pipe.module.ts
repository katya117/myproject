import { NgModule } from "@angular/core";
import { AgePipe } from "./age";
import { HighlightPipe } from "./highlight";
@NgModule({

  declarations: [  AgePipe, HighlightPipe],
  exports: [ AgePipe, HighlightPipe  ]
})
export class PipeModule { }
