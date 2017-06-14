import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';

export const lazyModuleRouting: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: LazyComponent }
]);