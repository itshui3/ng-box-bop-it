import { Component } from '@angular/core';
import { PiecesMap } from '../../pieces/pieces-map';

@Component({
  selector: 'app-centerable-object-wrapper',
  templateUrl: './centerable-object-wrapper.component.html',
  styleUrls: ['./centerable-object-wrapper.component.css'],
})
export class CenterableObjectWrapperComponent {
  public piecesMap = PiecesMap;
}
