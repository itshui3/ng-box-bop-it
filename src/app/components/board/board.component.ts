import { Component, OnInit } from '@angular/core';
import { MovementService } from '../../services/movement.service';
import { PositionsService } from '../../services/positions.service';

import { levelData } from 'src/app/lib/level';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  constructor(
    private _movement: MovementService,
    private _position: PositionsService
  ) {}

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

  ngOnInit() {
    // register level in physics
    this._position.registerPositions(levelData.positions);
  }
}
