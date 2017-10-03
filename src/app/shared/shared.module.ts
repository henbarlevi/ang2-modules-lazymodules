import { NgModule,ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCounterService} from './shared-counter.service';

//assume you have here more sharedable directives and component...

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [] //lazy modules that import the shared module will make NEW instance for services in here
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: SharedModule,
          providers: [SharedCounterService]
        };
      }
}
