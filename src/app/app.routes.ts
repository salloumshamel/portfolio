import {Routes} from '@angular/router';
import {ClassicComponent} from './layouts/classic/classic.component';
import {LandingComponent} from './pages/home-page/component/landing/landing.component'; // Replace with your actual component

export const routes: Routes = [
  {
    path: '',
    component: ClassicComponent, // Classic layout wraps these routes
    children: [
      {path: 'me', component: LandingComponent}, // Child route
      {path: '', redirectTo: 'me', pathMatch: 'full'}, // Default child route
    ]
  },
  {path: '**', redirectTo: ''} // Wildcard route for invalid paths
];
