export class LazyPrivateService {
  constructor() { }

  public do() {
    console.log(
      `im the lazy PRIVATE service from lazyModule, im singelton 
    I cant be called from outside the module cause im NOT included in forRoot() pattern`
    );
  }
}
