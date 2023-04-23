import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PiecesMap } from '../../../lib/pieces-map';
import {
  MovementService,
  PlayerPosition,
} from 'src/app/services/movement.service';
import {
  PositionsService,
  IPosition,
} from 'src/app/services/positions.service';

@Component({
  selector: PiecesMap.player,
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  public position$?: Observable<IPosition | undefined>;

  constructor(
    private _movement: MovementService,
    private _positions: PositionsService
  ) {}

  ngOnInit() {
    // why are my premises not sufficient for typescript to make this inference?
    this.position$ = this._positions.selectPiecePosition('player');
  }
}
