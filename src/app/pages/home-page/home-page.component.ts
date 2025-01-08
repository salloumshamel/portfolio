import {Component} from '@angular/core';
import {LandingComponent} from './component/landing/landing.component';

@Component({
  selector: 'app-home-page',
  imports: [
    LandingComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor() {
  }

}
