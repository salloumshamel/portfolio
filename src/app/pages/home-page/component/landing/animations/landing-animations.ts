import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Observer} from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
export class LandingAnimations {

  static imageAnimation(value: any) {

    gsap.set('.tool-bar', {
      opacity: 0,
      visibility: 'hidden',
    });
    gsap.set('.about', {
      display: 'block',
    });
    gsap.set('.pin-spacer', {
      width: '0px',
      height: '0px',
    })


    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.landing-section',
        start: "top top",
        end: "+=20%",
        scrub: 2,
        immediateRender: false,
        markers: true
      }
    });

    ScrollTrigger.create({
      trigger: '.landing-section',
      start: "20% 20%",
      end: "87.5% center",
      pin: '.right-section',
      scrub: true,
      pinSpacing: false,
      markers: true,
      invalidateOnRefresh: true,
      immediateRender: false,
      pinReparent: true,
    });

    timeline.from('.full-name', {
      fontSize: '250px',
      height: '100vh',
      width: '100vw',
    }, 0).to('.about', {
      display: 'flex',
    }, 0).from('.right-section', {
      xPercent: 50,
    }, 0).to('.tool-bar', {
      opacity: 1,
      visibility: 'visible',
    }).from('.job-title', {
      xPercent: -100,
      ease: 'circ.in'
    }, ">").from('.description', {
      xPercent: -100,
    }, ">");
  }

  static leftSectionScroll() {
  }
}
