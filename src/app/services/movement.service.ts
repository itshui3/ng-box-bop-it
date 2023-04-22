import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

export interface PlayerPosition {
  left: number;
  bottom: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  private _rightMovement: ReturnType<typeof setInterval> | undefined;
  private _leftMovement: ReturnType<typeof setInterval> | undefined;

  private positionX: BehaviorSubject<number> = new BehaviorSubject(0);
  private positionY: BehaviorSubject<number> = new BehaviorSubject(0);
  private positionX$: Observable<number> = this.positionX.asObservable();
  private positionY$: Observable<number> = this.positionY.asObservable();
  public position$: Observable<PlayerPosition> = combineLatest([
    this.positionX$,
    this.positionY$,
  ]).pipe(
    map((positionObservables) => {
      return {
        left: positionObservables[0],
        bottom: positionObservables[1],
      };
    })
  );

  public moveRightStart() {
    console.log('start moving right');
    this._rightMovement = setInterval(() => {
      const currentPosition = this.positionX.getValue();
      this.positionX.next(currentPosition + 1);
    }, 10);
  }
  public moveRightStop() {
    console.log('stop moving right');
    clearInterval(this._rightMovement);
  }

  public moveLeftStart() {
    console.log('start moving left');
    this._leftMovement = setInterval(() => {
      const currentPosition = this.positionX.getValue();
      this.positionX.next(currentPosition - 1);
    }, 10);
  }
  public moveLeftStop() {
    console.log('stop moving left');
    clearInterval(this._leftMovement);
  }
}
