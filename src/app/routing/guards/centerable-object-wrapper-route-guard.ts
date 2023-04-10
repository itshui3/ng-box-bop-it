import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// route components
import { BoardComponent } from '../../components/board/board.component';

// lab entrypoint
import { CenterableObjectWrapperComponent } from '../../components/supporters/centerable-object-wrapper/centerable-object-wrapper.component';

export const centerableObjectWrapperRouteGuard = () => {
  const route = inject(ActivatedRoute);
  route.params.subscribe((params) => {
    console.log('params in route guard', params);
  });
  return true;
};
