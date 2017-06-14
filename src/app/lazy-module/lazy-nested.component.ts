import { Component } from '@angular/core';

@Component({
  selector: 'lazy-nested-component',
  template: `
  <div>lazy nested component , im not exported from the module</div>`,
  
})
export class LazyNestedComponent {
  
}
