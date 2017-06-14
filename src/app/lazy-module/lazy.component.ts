import { Component } from '@angular/core';

@Component({
  selector: 'lazy-component',
  template: `
  <div>this is the <b> Lazy component </b> - im not exported from the module</div>
  <lazy-nested-component></lazy-nested-component>`,
  
})
export class LazyComponent {
  
}
