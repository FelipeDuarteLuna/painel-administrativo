import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('Dashboard').then((m) => m.dashboardRoutes),
  },
  {
    path: 'user',
    loadChildren: () => import('user-detail').then((m) => m.userDetailRoutes),
  },
];
