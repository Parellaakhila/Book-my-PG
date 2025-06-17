import { Component, OnInit } from '@angular/core';
import { HostelService, Hostel } from '../../services/hostel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostel-list',
  templateUrl: './hostel-list.component.html',
})
export class HostelListComponent implements OnInit {
  hostels: Hostel[] = [];

  constructor(private hostelService: HostelService, private router: Router) {}

  ngOnInit(): void {
    this.getHostels();
  }

  getHostels(): void {
    this.hostelService.getAllHostels().subscribe(data => {
      this.hostels = data;
    });
  }

  deleteHostel(id: number): void {
    this.hostelService.deleteHostel(id).subscribe(() => {
      this.getHostels(); // refresh list
    });
  }

  editHostel(id: number): void {
    this.router.navigate(['/edit', id]);
  }
}
