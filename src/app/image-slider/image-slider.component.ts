import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images: string[] = [
    
    'https://acoufelt.co.uk/wp-content/uploads/2022/06/2_SMU_Carousel-Image.jpg.webp',
    'https://acoufelt.co.uk/wp-content/uploads/2022/06/4_SMU_Carousel-Image.jpg.webp',
    'https://images.pexels.com/photos/2068664/pexels-photo-2068664.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://res.cloudinary.com/hostelling-internation/image/upload/v1721042646/Scotland/Braemar/Braemar_New_Carousel_15.jpg'
  ];
  currentIndex: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.startSlider();
  }

  startSlider() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      const transformValue = `translateX(-${this.currentIndex * 100}%)`;
      this.renderer.setStyle(this.el.nativeElement.querySelector('.slides'), 'transform', transformValue);
    }, 3000); // Interval for changing the image, 3000ms = 3 seconds
  }
}
