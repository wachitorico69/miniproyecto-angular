import { Component } from '@angular/core';
import { DomseguroPipe } from '../domseguro.pipe';

@Component({
  selector: 'app-home',
  imports: [DomseguroPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: string[] = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg'
  ];

  video:string = "4WDb2NkcZBg?si=Xm79lw--nKfQQLT-";

  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
