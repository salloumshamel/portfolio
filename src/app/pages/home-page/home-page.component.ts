import {AfterViewInit, Component} from '@angular/core';
import {LandingComponent} from './component/landing/landing.component';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ProjectsComponent} from './component/projects/projects.component';
import {ExperienceComponent} from './component/experince/experience.component';
import {SectionsNames} from './utils/sections-names';
import {SectionsAnimation} from './animations/sections-animations';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-page',
  imports: [
    LandingComponent,
    ProjectsComponent,
    ExperienceComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit {
  constructor() {

  }

  ngAfterViewInit(): void {
    SectionsAnimation.sectionsScrollTriggerBetweenLandingAndProjects();
    SectionsAnimation.testAnimation();
  }

  protected readonly SectionsNames = SectionsNames;
}


//first example
//to learn pin and start and end again
//toggle actions
// 4 values
// onEnter onLeave onEnterBack onLeaveBack
// values (play,restart,reverse,pause,resume,complete)
// gsap.to(".square", {
// x: 1000,
//   duration: 10,
//   scrollTrigger: {
//     trigger: ".square1",
//     start: "top 80%",
//     end: "top 30%",
//     pin: ".square",
//     pinSpacing: true,
//     scrub: 4,
//     toggleActions: "restart pause resume complete",

//     toggleClass: "red"
//   }
// });
// ScrollTrigger.create(
//   {
//     trigger: '.box',
//     start: 'top 80%',
//     end: 'top 50%',

//     toggleClass: {targets: ['body'], className: 'bg-red'},
//   });

//section example time lines
// const timeLine = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.box',
//     start: 'top 80%',
//     end: 'top 30%',
//     scrub: 1,

//   }
// });
// timeLine.to('.box', {x: 500, duration: 5}).to('.box', {y: 300, duration: 2}).to('.box', {x: 0, duration: 2})

// gsap.to(".box", {
//   x: 1000,
//   duration: 10,
//   scrollTrigger: {
//     trigger: ".box",
//     start: "top 80%",
//     end: "top 30%",
//     pin: false,
//     pinSpacing: false,
//     scrub: 4,
//     toggleActions: "restart pause resume complete",

//     toggleClass: "red"
//   }
// });
