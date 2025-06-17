import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city';


@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent implements OnInit {
  cities: City[] = [];
  searchQuery: string = '';

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }

  filteredCities(): City[] {
    return this.cities.filter(city =>
      city.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  useLocation(): void {
    navigator.geolocation.getCurrentPosition(position => {
      alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
      // You can use these coordinates to fetch the nearest city
    });
  }
}
