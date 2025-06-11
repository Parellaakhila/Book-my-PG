import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  searchQuery: string = '';
  items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Pineapple'
  ];

  get filteredItems() {
    return this.items.filter(item =>
      item.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}
