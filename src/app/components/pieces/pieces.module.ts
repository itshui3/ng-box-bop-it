import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerModule } from './player/player.module';
import { DeadBlockComponent } from './dead-block/dead-block.component';

@NgModule({
  declarations: [
    DeadBlockComponent
  ],
  imports: [CommonModule, PlayerModule],
})
export class PiecesModule {}
