import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// route components
import { BoardComponent } from '../components/board/board.component';

// lab
import { CenterableObjectWrapperComponent } from '../components/supporters/centerable-object-wrapper/centerable-object-wrapper.component';
// pieces
import { PlayerComponent } from '../components/pieces/player/player.component';
import { DeadBlockComponent } from '../components/pieces/dead-block/dead-block.component';

export const routes: Routes = [
  { path: 'board', component: BoardComponent },
  {
    path: 'lab',
    component: CenterableObjectWrapperComponent,
    children: [
      { path: 'player', component: PlayerComponent },
      { path: 'deadblock', component: DeadBlockComponent },
    ],
  },
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
