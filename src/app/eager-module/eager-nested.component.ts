import { Component } from '@angular/core';

@Component({
  selector: 'eager-nested-component',
  template: `
  <div>eager nested component , im not exported from the module</div>`,
  
})
export class EagerNestedComponent {
  
}
