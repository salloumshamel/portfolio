import {AfterViewInit, Component} from '@angular/core';
import {LandingComponent} from './component/landing/landing.component';
import {AboutMeComponent} from './component/about-me/about-me.component';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-page',
  imports: [
    LandingComponent,
    AboutMeComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit {
  constructor() {

  }

  ngAfterViewInit(): void {
    ScrollTrigger.create({
      trigger: '.box',
      start: 'top 80%',
      end: 'top 50%',
      markers: true,
      toggleClass: {targets: ['body'], className: 'bg-red'},
    })

  }

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
//     markers: true,
//     toggleClass: "red"
//   }
// });


//section example time lines
// const timeLine = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.box',
//     start: 'top 80%',
//     end: 'top 30%',
//     scrub: 1,
//     markers: true
//   }
// });
// timeLine.to('.box', {x: 500, duration: 5}).to('.box', {y: 300, duration: 2}).to('.box', {x: 0, duration: 2})
