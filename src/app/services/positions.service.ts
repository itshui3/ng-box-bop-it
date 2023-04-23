import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { PiecesMap } from '../lib/pieces-map';

export interface IPosition {
  x: number;
  y: number;
  w: number;
  h: number;
}
export type IPositionMap = {
  [K in keyof typeof PiecesMap]?: IPosition;
};

@Injectable({
  providedIn: 'root',
})
export class PositionsService {
  private _positionMap: BehaviorSubject<IPositionMap> = new BehaviorSubject({});
  private positionMap$ = this._positionMap.asObservable();
  // individual pieces should receive their name as input from board
  // then utilizing this name,

  constructor() {}

  public registerPositions(positions: IPositionMap) {
    this._positionMap.next(positions);
  }

  // on piece component init
  public selectPiecePosition(piece: keyof IPositionMap) {
    return this.positionMap$.pipe(map((positionMap) => positionMap[piece]));
  }
}
