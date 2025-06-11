import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nrt',
 templateUrl: './nrt.component.html',
  styleUrl: './nrt.component.css'
})
export class NrtComponent {
  isContentVisible: number = 0;

  // Method to toggle content based on button clicked
  toggleContent(option: number) {
    // Toggle the content, if already visible, hide it
    if (this.isContentVisible === option) {
      this.isContentVisible = 0;
    } else {
      this.isContentVisible = option;
    }
  }

}
