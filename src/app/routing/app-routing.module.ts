import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// route components
import { BoardComponent } from '../components/board/board.component';

// lab entrypoint
import { CenterableObjectWrapperComponent } from '../components/supporters/centerable-object-wrapper/centerable-object-wrapper.component';
import { centerableObjectWrapperRouteGuard } from './guards/centerable-object-wrapper-route-guard';

export const routes: Routes = [
  { path: 'board', component: BoardComponent },
  {
    path: 'lab/:id',
    component: CenterableObjectWrapperComponent,
    canActivate: [centerableObjectWrapperRouteGuard],
  },
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
