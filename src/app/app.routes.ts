import {Routes} from '@angular/router';
import {ClassicComponent} from './layouts/classic/classic.component';
import {HomePageComponent} from './pages/home-page/home-page.component'; // Replace with your actual component

export const routes: Routes = [
  {
    path: '',
    component: ClassicComponent, // Classic layout wraps these routes
    children: [
      {path: 'me', component: HomePageComponent}, // Child route
      {path: '', redirectTo: 'me', pathMatch: 'full'}, // Default child route
    ]
  },
  {path: '**', redirectTo: ''} // Wildcard route for invalid paths
];
