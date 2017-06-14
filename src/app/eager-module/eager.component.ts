import { Component } from '@angular/core';

@Component({
  selector: 'eager-component',
  template: `
  <div>this is the <b>eager component</b></div>
  <small> the eager module router-outlet:</small>
    <router-outlet></router-outlet>`,
  
})
export class EagerComponent {
  
}
