import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
//import {MediaChange,MediaObserver} from '@angular/flex-layout';
//import {Subscription} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-world';
//   mediaSub:Subscription;
//   constructor( private location: LocationStrategy,  
//     public mediaObserver: MediaObserver){}
 //  ngOnInit(){
//   this.mediaSub=this.mediaObserver.media$.subscribe(
//     (result:MediaChange)=>{
//       console.log(result.mqAlias);
//     }
//   );
// }
//   ngOnDestroy(){
//     this.mediaSub.unsubscribe();
//   }
    constructor(private location:LocationStrategy){}
    ngOnInit(){
     history.pushState(null, null, window.location.href);  
    this.location.onPopState(() => {
      history.pushState(null, null, window.location.href);
    });
      
   }
  }


