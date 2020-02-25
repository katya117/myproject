import { NgModule } from "@angular/core";
import { AgePipe } from "./age";
import { HighlightPipe } from "./highlight";
import { InitialPipe  } from "./initial";
@NgModule({

  declarations: [ InitialPipe, AgePipe, HighlightPipe],
  exports: [InitialPipe, AgePipe, HighlightPipe  ]
})
export class PipeModule { }
