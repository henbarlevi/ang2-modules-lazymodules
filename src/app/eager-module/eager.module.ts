// When it comes to components, pipes and directives, 
//every module should import its own dependencies disregarding
// if the same dependencies were imported in the root module or in any other feature module.
// In short, even when having multiple feature modules, each one of them needs to import the CommonModule
//https://angular-2-training-book.rangle.io/handout/modules/feature-modules.html
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerComponent } from './eager.component';
import { EagerNestedComponent } from './eager-nested.component';
import { EagerService } from './eager.service';
import { eagerRouting } from './eager.routing';
@NgModule({
    imports: [
        CommonModule,
        eagerRouting
    ],
    //components ,directives ,pipes:
    declarations: [
        EagerComponent,
        EagerNestedComponent
    ],
    //EagerService = accessable accross the app - NOTE - if we want to use this service in another lazyModule
    // and we want it to be singelton we need to use the forRoot() pattern
    providers: [EagerService],
    //export only that components directives and pipes
    // that need to be used outside of this module 
    //services are not need to be exported, the acceable accross the app
    exports: [EagerComponent]
})
export class EagerModule { }