import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class LandingAnimations {

  static imageAnimation(value: any) {
    let timeline = gsap.timeline();
    timeline.from('.right-section', {
      xPercent: value,
      ease: 'power2',
      duration: 2,
    });

    ScrollTrigger.create({
      trigger: '.right-section',
      animation: timeline,
      start: "top top",
      end: "10% 5%",
      pin: false,
      pinSpacing: false,
      markers: true,
      scrub: 1,
      onLeave: () => console.log("Scroll event complete"),
    });
  }

  static leftSectionScroll() {
  }
}
