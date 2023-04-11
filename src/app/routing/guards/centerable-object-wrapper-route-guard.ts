import { inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

// route components
import { BoardComponent } from '../../components/board/board.component';

// lab entrypoint
import { CenterableObjectWrapperComponent } from '../../components/supporters/centerable-object-wrapper/centerable-object-wrapper.component';

export const centerableObjectWrapperRouteGuard = () => {
  const route = inject(ActivatedRoute);
  console.log('route', route.snapshot);

  // route.params.subscribe((params) => {
  //   console.log('params in route guard', params);
  // });
  return true;
};
