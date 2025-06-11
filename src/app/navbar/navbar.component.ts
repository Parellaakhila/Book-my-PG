import { Component, HostListener, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  components = [
    { name: 'Home', route: 'home' },
    { name: 'Profile', route: 'profile' },
    { name: 'About', route: 'about' },
    { name: 'Businesses', route: 'businesses' },
    { name: 'curd', route: 'curd' },
    {name:'nrt',route:'nrt'},
    
  ];

  constructor(private router: Router) {}

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
  isMenuOpen = false;
  isProfileMenuOpen = false;
  lastScrollTop = 0;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  ngOnInit() {
    // Ensure the initial scroll position is set
    this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      navbar.classList.add('navbar-hidden');
    } else {
      navbar.classList.remove('navbar-hidden');
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }
}