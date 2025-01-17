import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Flip} from 'gsap/Flip';

gsap.registerPlugin(Flip, ScrollTrigger);

export class SectionsAnimation {

  static projectsScrollTrigger() {
    ScrollTrigger.create({
      trigger: '#projects',
      pin: true,
      start: 'top top',
      end: 'bottom top',
      pinSpacing: false,
      immediateRender: false,
      markers: true,
    })
  }

  static testAnimation() {

  }
}
