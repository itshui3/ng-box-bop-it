import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PiecesMap } from '../pieces-map';
import {
  PlayerMovementService,
  PlayerPosition,
} from 'src/app/services/player-movement.service';

@Component({
  selector: PiecesMap.player,
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  public position$: Observable<PlayerPosition> | undefined;

  constructor(private _movement: PlayerMovementService) {}

  ngOnInit() {
    this.position$ = this._movement.position$;
    this.position$.pipe(
      tap((v) => console.log('position value in subscription', v))
    );
  }
}
