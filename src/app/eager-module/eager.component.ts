import { Component } from '@angular/core';

@Component({
  selector: 'eager-component',
  template: `
  <div class="container border"><p>this is the <b>eager component</b>
  <small> the eager module router-outlet:</small></p>
    <router-outlet></router-outlet></div>`,
  
})
export class EagerComponent {
  
}
