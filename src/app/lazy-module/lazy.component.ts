import { Component } from '@angular/core';
import {SharedCounterService} from '../shared/shared-counter.service';
@Component({
  selector: 'lazy-component',
  template: `
  <div>this is the <b> Lazy component </b> - im not exported from the module</div>
  <lazy-nested-component></lazy-nested-component>`,
  
})
export class LazyComponent {
  constructor(private SharedCounterService: SharedCounterService){
    setInterval(()=>{this.SharedCounterService.inc()},1000);
    
  }
}
