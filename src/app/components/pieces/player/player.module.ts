import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { MovementService } from 'src/app/services/movement.service';

@NgModule({
  providers: [MovementService],
  declarations: [PlayerComponent],
  imports: [CommonModule],
  exports: [PlayerComponent],
})
export class PlayerModule {}
