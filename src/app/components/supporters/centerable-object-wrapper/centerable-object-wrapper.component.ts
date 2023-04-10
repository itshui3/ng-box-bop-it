import { Component, OnInit } from '@angular/core';
import { PiecesMap } from '../../pieces/pieces-map';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centerable-object-wrapper',
  templateUrl: './centerable-object-wrapper.component.html',
  styleUrls: ['./centerable-object-wrapper.component.css'],
})
export class CenterableObjectWrapperComponent implements OnInit {
  public piecesMap = PiecesMap;
  public piece: string | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] in PiecesMap) {
        this.piece = params['id'];
      } else {
        console.error(`Component not found, please check URI: `, params['id']);
      }
    });
  }
}
