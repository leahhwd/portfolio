import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="about-container">

   <div class="slide-show">
    <img [src]="slides[currentIndex]" class="slideshow-photo" alt="slideshow photos">
     <div class="controls">
      <button class="prev" (click)="prevSlide()">Previous</button>
      <button class="next" (click)="nextSlide()">Next</button>
     </div>
   </div>

   <div class="introP">
    <p>Greetings! I’m a soon-to-be graduate with a Bachelor’s degree in
     Full-Stack Web Development. Coming from a Coast Guard family, I grew 
     up primarily on the island of Kodiak, Alaska, where I met my husband, 
     who is also in the Coast Guard. Currently, we are living in Oahu, 
     Hawaii, with our two children, and any free time is spent at the beach. </p>

     <p>My love for the internet and constant desire to create things 
     inspired my deep passion for Web Development. Designing useful and 
     visually appealing tools for people to interact with is one of my favorite 
     things to do. As our world further evolves into a Digital Age, 
     well-designed applications have the capability of making a powerful 
     impact on both individuals and organizations. To me, web development 
     means endless possibilities, and I am excited to apply my artistic and 
     technical knowledge to provide beautiful websites for our vast global network.</p>
   </div>
  </div>

  `,
  styles: `
  .about-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 900px;
    margin: auto;
  }

  .introP {
    color: black;
    padding: 30px;
    font-size: 20px;
    margin-bottom: 20px;
    align-self: flex-end;
    max-width: 40%;
  
  }

  .slide-show {
    max-width: 50%;
    padding: 20px;
    margin: 20px 0;
    align-self: flex-start;
    
  }

  .slideshow-photo {
    width: 100%;
    height: auto;
    padding-top: 50px;
    border-radius: 10px;
    max-height: 500px;
    
  }

  .controls {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #42858C;
    color: white;
  }
  `
})
export class AboutComponent {
slides = [
  'assets/IMG_9352.jpg',
  'assets/IMG_9354.jpg',
  'assets/IMG_9356.jpg',
  'assets/IMG_9349.jpg',
  'assets/IMG_9350.jpg',
  'assets/IMG_9351.jpg'
];

currentIndex = 0;
slideInterval: any;

constructor() {
  this.startSlideshow();
}

nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.slides.length;
}

prevSlide() {
  this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
}

startSlideshow() {
  this.slideInterval = setInterval(() => {
    this.nextSlide();
  }, 3000);
}

stopSlideshow() {
  clearInterval(this.slideInterval)
}
}
