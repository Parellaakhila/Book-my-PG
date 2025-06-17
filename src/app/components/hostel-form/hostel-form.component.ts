import { Component, OnInit } from '@angular/core';
import { HostelService, Hostel } from '../../services/hostel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hostel-form',
  templateUrl: './hostel-form.component.html',
})
export class HostelFormComponent implements OnInit {
  hostel: Hostel = {
    name: '',
    address: '',
    rooms: 0,
    facilities: []
  };

  isEdit = false;

  constructor(
    private hostelService: HostelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.hostelService.getHostelById(+id).subscribe(data => {
        this.hostel = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit && this.hostel.id) {
      this.hostelService.updateHostel(this.hostel.id, this.hostel).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.hostelService.addHostel(this.hostel).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
