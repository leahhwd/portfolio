import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class="wrapper">
   <main class="main-content">

    

      
      <nav class="navbar">
       <ul class="navbar-list">
        <li class="navbar-item"><a routerLink="/">Home</a></li>
        <li class="navbar-item"><a href="/about">About</a></li>
        <li class="navbar-item"><a href="/resume">Resume</a></li>
        <li class="navbar-item"><a href="/projects">Projects</a></li>
       </ul>
      </nav>
   

    <section class="content">
     <router-outlet />
    </section>
   </main>

   <footer class="footer">
    <nav class="footer-nav">
     <a routerLink="/">Home</a> |
     <a href="/about">About</a> |
     <a href="/resume">Resume</a> |
     <a href="/projects">Projects</a>
    </nav>
    <p>&copy; 2024</p>
   </footer>
  </div>
  `,
  styles: [`
  
  `]
})
export class AppComponent {
  title = 'portfolio';
}
