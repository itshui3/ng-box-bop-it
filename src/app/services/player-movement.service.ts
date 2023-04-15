import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface PlayerPosition {
  left: number;
  top: number;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerMovementService {
  private _rightMovement: ReturnType<typeof setInterval> | undefined;
  private _leftMovement: ReturnType<typeof setInterval> | undefined;

  private position: BehaviorSubject<PlayerPosition> = new BehaviorSubject({
    left: 0,
    top: 0,
  });
  public position$: Observable<PlayerPosition> = this.position.asObservable();

  public moveRightStart() {
    console.log('start moving right');
    this._rightMovement = setInterval(() => {
      const currentPosition = this.position.getValue();
      this.position.next({
        ...currentPosition,
        left: currentPosition.left + 1,
      });
    }, 10);
  }
  public moveRightStop() {
    console.log('stop moving right');
    clearInterval(this._rightMovement);
  }

  public moveLeftStart() {
    console.log('start moving left');
    this._leftMovement = setInterval(() => {
      const currentPosition = this.position.getValue();
      this.position.next({
        ...currentPosition,
        left: currentPosition.left - 1,
      });
    }, 10);
  }
  public moveLeftStop() {
    console.log('stop moving left');
    clearInterval(this._leftMovement);
  }
}
