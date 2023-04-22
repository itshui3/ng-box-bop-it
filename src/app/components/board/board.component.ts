import { Component, OnInit } from '@angular/core';
import { MovementService } from '../../services/movement.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  constructor(private _movement: MovementService) {}

  public moveRightStart() {
    this._movement.moveRightStart();
  }
  public moveRightStop() {
    this._movement.moveRightStop();
  }

  public moveLeftStart() {
    this._movement.moveLeftStart();
  }
  public moveLeftStop() {
    this._movement.moveLeftStop();
  }
}
