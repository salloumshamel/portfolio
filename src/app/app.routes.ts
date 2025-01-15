import {Routes} from '@angular/router';
import {ClassicComponent} from './layouts/classic/classic.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TestComponent} from './test/test.component'; // Replace with your actual component

export const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: '',
    component: ClassicComponent,
    children: [

      {path: 'me', component: HomePageComponent},
      {path: '', redirectTo: 'me', pathMatch: 'full'},
    ]
  },
  {path: '**', redirectTo: ''}
];
