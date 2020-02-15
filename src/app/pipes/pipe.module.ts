import { NgModule } from "@angular/core";
import { AgePipe } from "./age";
import { InitialPipe  } from "./initial";

@NgModule({

  declarations: [ InitialPipe, AgePipe ],
  exports: [InitialPipe, AgePipe  ]
})
export class PipeModule { }
