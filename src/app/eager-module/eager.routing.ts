import { RouterModule } from '@angular/router'; //import router module
import { EagerComponent } from './eager.component';
import { EagerNestedComponent} from './eager-nested.component';
export const eagerRouting = RouterModule.forChild([
  {
    path: 'eager',
    component: EagerComponent,
    //canActivate: [LoggedInGuard], //the user can go to this route only if the LoggedInGuard allow it
       children: [
            {path: '', redirectTo: 'eager-nested', pathMatch: 'full'},
            {path: 'eager-nested', component: EagerNestedComponent}

        ]
  },

]);
