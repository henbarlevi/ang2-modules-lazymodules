import { Component ,OnInit} from '@angular/core';
import {EagerService } from './eager-module/eager.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private EagerService : EagerService){

  }
  ngOnInit(){
  this.EagerService.do();//  
  }
}
