import {AfterViewInit, Component} from '@angular/core';
import {gsap} from 'gsap';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {

  constructor() {

  }

  ngAfterViewInit() {

  }

}
