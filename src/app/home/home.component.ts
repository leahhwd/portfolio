import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="greeting">
     <div class="intro">
      <h1>Hello,</h1>
      <p>My name is Leah, and I like creating things for the web.</p>
     </div>

     <div class="profile">
      <img src="./assets/profile1.jpg" alt="profile photo"/>
      <h3>My Bucket List:</h3>

      <ul class="bucket-list">
       <li>Join a roller derby team.</li>
       <li>Contribute to an open-source project.</li>
       <li>Buy a house</li>
      </ul>
     </div>
    </div>

  `,
  styles: `
  .greeting {
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 100px auto 0;
  }

  .intro {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .intro h1 {
    font-size: 200px;
    margin: 0;
    text-shadow: 2px 4px 4px rgb(46 91 173 / 0.6);
  }

  .intro p {
    font-size: 50px;
    margin-top: 10px;
  }

  .profile {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile img {
    max-width: 50%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.5);
  }

  .bucket-list {
    list-style: square;
    padding: 0;
  }

  .bucket-list li {
    font-size: 18px;
  }


  `
})
export class HomeComponent {

}
