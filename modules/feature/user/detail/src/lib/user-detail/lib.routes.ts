import { Route } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

export const userDetailRoutes: Route[] = [
  { path: ':id', component: UserDetailComponent },
];
