export class LazyService {
  constructor() { }

  public do() {
    console.log(
      `im the lazy service from lazyModule, im singelton 
    and available across all app by using the forRoot() pattern`
    );
  }
}
