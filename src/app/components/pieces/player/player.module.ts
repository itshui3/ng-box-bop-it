import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerMovementService } from 'src/app/services/player-movement.service';

@NgModule({
  providers: [PlayerMovementService],
  declarations: [PlayerComponent],
  imports: [CommonModule],
  exports: [PlayerComponent],
})
export class PlayerModule {}
