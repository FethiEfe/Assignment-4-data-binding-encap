import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  storeNumbers=[]
  mysetInterval;

  startGaming(){
    this.mysetInterval = setInterval(()=>{
      this.storeNumbers.push(this.storeNumbers.length + 1)
    }, 1000)
  }

  pauseGaming(){
    clearInterval(this.mysetInterval)
  }
}
