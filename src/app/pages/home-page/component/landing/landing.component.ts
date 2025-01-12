import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {LanguageService} from '../../../../services/language-service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, AfterViewInit {
  constructor(private languageService: LanguageService, private elementRef: ElementRef) {
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
    // let timeline = gsap.timeline();
    //
    // // Sequential animation chain
    // timeline
    //   .from('.right-section', {
    //     xPercent: this.getPercentageBasedOnLang(50),
    //     rotation: 0,
    //     ease: 'power2',
    //     duration: 2,
    //   });
    //
    //
    // ScrollTrigger.create({
    //   trigger: ".landing",
    //   animation: timeline,
    //   start: "top  256px",
    //   end: "90% 20%",
    //   pin: false,
    //   pinSpacing: false,
    //   scrub: 1,
    //   // markers: true,
    //   onLeave: () => console.log("Scroll event complete"),
    // });
    //
    // timeline.eventCallback("onComplete", function () {
    // });
  }

  getPercentageBasedOnLang(value: number) {
    const lang = this.languageService.currentLanguage;
    return lang == 'ar' ? -value : value;
  }

}
