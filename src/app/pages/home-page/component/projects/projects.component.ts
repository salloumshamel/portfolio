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

  clickProject(project) {
    const state = Flip.getState(".selected-project, selected-project, .project, .projects, .show");
    // Toggle visibility
    const selected = document.querySelector(".selected-project");
    const projectContainer = document.querySelector(".project-container");
    const projects = document.querySelector(".projects");
    selected.classList.toggle("show");
    projectContainer.classList.toggle("show");
    projects.classList.toggle("show");
    // Animate the flip transition
    Flip.from(state, {
      absolute: false,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut"
    });
  }

}
