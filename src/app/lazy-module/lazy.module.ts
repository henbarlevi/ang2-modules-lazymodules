// When it comes to components, pipes and directives, 
//every module should import its own dependencies disregarding
// if the same dependencies were imported in the root module or in any other feature module.
// In short, even when having multiple feature modules, each one of them needs to import the CommonModule
//https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponent } from './lazy.component';
import { LazyNestedComponent } from './lazy-nested.component';
import { LazyPrivateService } from './lazy-private.service'
import { LazyService } from './lazy.service'

import { lazyModuleRouting } from './lazy.routing'
/*NOTE - there is NO need to import SharedModule for his services, (because we already using the forRoot pattern in the app module),
 we import it to use his shared components and directives etc..*/
import { SharedModule} from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    lazyModuleRouting],
  //components ,directives ,pipes:
  declarations: [
    LazyComponent,
    LazyNestedComponent
  ],
  //LazyPrivateService = accessable only inside the module
  providers: [LazyPrivateService],

})
export class LazyModule {
  
}