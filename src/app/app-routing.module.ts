import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// route components
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [{ path: 'board', component: BoardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
