import { Injectable } from '@angular/core';
import { City } from '../models/city';


@Injectable({ providedIn: 'root' })
export class CityService {
  private cities: City[] = [
    { name: 'Bengaluru', imageUrl: 'assets/cities/bangalore.jpeg' },
    { name: 'Bhubaneswar', imageUrl: 'assets/cities/bhubaneswar.jpeg' },
    { name: 'Chennai', imageUrl: 'assets/cities/chennai.jpeg' },
    { name: 'Coimbatore', imageUrl: 'assets/cities/coimbatore.jpeg' },
    { name: 'Gurgaon', imageUrl: 'assets/cities/gurgaon.jpeg' },
    { name: 'Hyderabad', imageUrl: 'assets/cities/hyderabad.jpeg' },
    { name: 'Indore', imageUrl: 'assets/cities/indore.jpeg' },
    { name: 'Jaipur', imageUrl: 'assets/cities/jaipur.jpeg' },
    { name: 'Kolkata', imageUrl: 'assets/cities/kolkata.jpeg' },
    { name: 'Mumbai', imageUrl: 'assets/cities/mumbai.jpeg' },
    { name: 'New Delhi', imageUrl: 'assets/cities/delhi.jpeg' },
    { name: 'Noida', imageUrl: 'assets/cities/noida.jpeg' },
    { name: 'Pune', imageUrl: 'assets/cities/pune.jpeg' }
  ];

  getCities(): City[] {
    return this.cities;
  }
}
