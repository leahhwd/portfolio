import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <div class="projects-container">
     <div class="project">
      <h2>In-N-Out Books</h2>
      <p class="description">
       A project using Node.js and Express with a Mock NoSQL database to make API calls.
      </p>
      <div class="technology">
       <h4>Technologies:</h4>
       <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
       </ul>
      </div>
       <a href="https://github.com/leahhwd/in-n-out" target="_blank">
       GitHub Repository
       </a>
     </div>

     <div class="project">
      <h2>RPG Character Builder</h2>
      <p class="description">
       A project using Angular to create characters in a Single Page Application (SPA).
      </p>
      <div class="technology">
       <h4>Technologies</h4>
       <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Angular</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
       </ul>
      </div>
       <a href="https://github.com/leahhwd/web-425/tree/main/rpg-character-builder" target="_blank">
        GitHub Repository
       </a>
     </div>
    </div>


  `,
  styles: ``
})
export class ProjectsComponent {

}
