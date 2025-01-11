import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-landing',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, AfterViewInit {
  @ViewChild(ElementRef, {static: true}) name: ElementRef;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.gsapAnimation();
  }

  scrollToAboutMeSection() {
    gsap.to(window, {duration: 1, scrollTo: {y: "#section2", offsetY: 70,}, ease: "power2", stagger: 0.2,});
  }


  gsapAnimation() {
    let timeline = gsap.timeline();
    timeline.from('.right-section', {
      xPercent: +100,
      rotation: 0,
      ease: 'power2'
    }).from('#angular1', {
      xPercent: -100,
      yoyo: true,
      repeat: -1,
      duration: 10,
    }).from('#angular2', {
      xPercent: +100,
      yoyo: true,
      repeat: -1,
      duration: 10,
    }).from('#angular3', {
      xPercent: -100,
      yoyo: true,
      repeat: -1,
      duration: 10,
    });
    ScrollTrigger.create({
      trigger: ".landing",
      animation: timeline,
      start: "top  128px",
      end: "+=500",
      pin: true,
      // scrub: 1,
      markers: true,
    })
  }

}
