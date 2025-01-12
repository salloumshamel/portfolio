import {AfterViewInit, Component} from '@angular/core';


import {gsap} from 'gsap';
import {Flip} from 'gsap/Flip';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  projects: any[] = [
    {id: 1, name: 'project1'},
    {id: 2, name: 'project1'},
    {id: 3, name: 'project1'},
    {id: 4, name: 'project1'}
  ];

  ngAfterViewInit() {
    const timeLine = gsap.timeline({});

  }

  clickProject(project: any) {
    const state = Flip.getState(".selected-project, .project, .projects");

    // Toggle visibility and layout classes
    document.querySelector(".selected-project")?.classList.toggle("show");
    document.querySelector(".project-container")?.classList.toggle("show");
    document.querySelector(".projects")?.classList.toggle("show");

    // Apply Flip animation for transitions
    Flip.from(state, {
      absolute: true,
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.1,
      scale: true,
      onComplete: () => {
        console.log('Flip animation completed');
      }
    });
  }
}
