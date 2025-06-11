
import { Component, OnInit, Renderer2, ElementRef,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  searchTerm: string = '';
  components = [
    { name: 'Home', route: 'home' },
    { name: 'Profile', route: 'profile' },
    { name: 'About', route: 'about' },
    { name: 'Businesses', route: 'businesses' },
    { name: 'curd', route: 'curd' },
    {name:'nrt',route:'nrt'},
    
  ];

  

  onSearch() {
    const matchedComponent = this.components.find(component =>
      component.name.toLowerCase() === this.searchTerm.toLowerCase()
    );

    if (matchedComponent) {
      this.router.navigate([matchedComponent.route]);
    } else {
      console.log('No exact match found for:', this.searchTerm);
    }
  }

  onEnterKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
 


  images: string[] = [
    
    'https://acoufelt.co.uk/wp-content/uploads/2022/06/2_SMU_Carousel-Image.jpg.webp',
    'https://acoufelt.co.uk/wp-content/uploads/2022/06/4_SMU_Carousel-Image.jpg.webp',
    'https://images.pexels.com/photos/2068664/pexels-photo-2068664.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://res.cloudinary.com/hostelling-internation/image/upload/v1721042646/Scotland/Braemar/Braemar_New_Carousel_15.jpg'
  ];
  currentIndex: number = 0;

  constructor(private router: Router,private renderer: Renderer2, private el: ElementRef) {}

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


 


 



