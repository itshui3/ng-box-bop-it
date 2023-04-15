import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { PiecesModule } from '../pieces/pieces.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, PiecesModule],
})
export class BoardModule {}
