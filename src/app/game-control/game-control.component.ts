import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styles: [`
  p{color:red}
  `]
})
export class GameControlComponent implements OnInit {
  @Output() startGaming = new EventEmitter<{}>()
  @Output() pauseGaming = new EventEmitter<{}>()
  constructor() { }

  ngOnInit(): void {
  }
  onClickStart(){
    this.startGaming.emit()
  }
  onClickPause(){
    this.pauseGaming.emit()
  }
}
