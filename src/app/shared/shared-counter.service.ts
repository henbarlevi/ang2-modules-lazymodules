import { Injectable } from '@angular/core';

@Injectable()
export class SharedCounterService {
  counter = 0;
  constructor() { }
  inc(){
    this.counter++;
    console.log('SHARED counter service :'+this.counter);
  }
}
