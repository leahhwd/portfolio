import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  template: `
   <div class="resume-container">
    <div class="resume-tabs">
     <mat-tab-group class="mat-elevation-z4">
      
       <mat-tab label="Summary">
        <p>Reliable and detail-oriented student nearing graduation with a Bachelor's degree in Web Development and a 3.9 GPA,
        achieving Dean's List six semesters.
        Passionate about building dynamic, user-friendly web applications with a consistent commitment to continuous
        learning. Proficient in full-stack technologies such as HTML, CSS, JavaScript, Node.js, and more. Eager to bring
        problem-solving abilities and collaborative skills to development teams.</p>
       </mat-tab>

       <mat-tab label="Experience">
        <ul>
         <li>
          <h2>Preschool Teacher</h2>
          <p>Kodiak Child Development Center</p>
          <p>09/2017 - 04/2021</p>
         </li>
         <li>
          <h2>Dental Assistant</h2>
          <p>Kodiak Area Native Association</p>
          <p>02/2018 - 07/2019</p>
         </li>
        </ul>
       </mat-tab>
     
       <mat-tab label="Skills">
        <ul class="skills">
         <li>HTML5</li>
         <li>CSS3</li>
         <li>JavaScript</li>
         <li>Node.js</li>
         <li>Angular</li>
         <li>Python</li>
         <li>Express.js</li>
         <li>MongoDB</li>
         <li>NoSQL</li>
        </ul>
       </mat-tab>
      
       <mat-tab label="Education">
        <h2>Web Development - B.S.</h2>
        <p>Bellevue University</p>
        <h2>June 2021 - April 2025</h2>
       </mat-tab>
    
       <mat-tab label="Contact">
       <ul class="contact">
        <li>
         <a href="mailto: leah.mk.dev@gmail.com">Send Email</a>
        </li>
        <li>Or</li>
        <li>
         <a href="tel:9075128125">Call</a>
        </li>
       </ul>
       </mat-tab>
      
     </mat-tab-group>
    </div>

    <div class="resume-link">
     <a href="assets/myResume.pdf" download="leahResume.pdf">Download a detailed copy here!</a>
    </div>
   </div>
   
  `,
  styles: `
  .resume-container {
    display: flex;
    height: 100%;
    padding-top: 100px;
    width: 100%;
    flex-direction: column;
    
  }

  .mat-tab-group {
    width: 100%;
    flex-direction: row;
    
  }

  

  .mat-tab-labels {
    flex-direction: column;
  }

  p {
    font-size: 30px;
    padding: 5px;
    text-align: center;
  }

  h2 {
    text-align: center;
    text-decoration: underline;
  }

  .skills {
    text-align: center;
    font-size: 30px;
    padding-top: 20px;
    
  }

  .contact {
    text-align: center;
    font-size: 30px;
    padding: 30px;
    list-style-type: none;
  }
  
  a {
    color: black;
  }

  .resume-link {
    text-align: center;
    padding-top: 50px;
    
  }
  `
})
export class ResumeComponent {

}
