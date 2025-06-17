// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HostelService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Hostel {
  id?: number;
  name: string;
  address: string;
  rooms: number;
  facilities: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  private apiUrl = 'http://localhost:3000/hostels'; // Replace with your real API

  constructor(private http: HttpClient) {}

  getAllHostels(): Observable<Hostel[]> {
    return this.http.get<Hostel[]>(this.apiUrl);
  }

  getHostelById(id: number): Observable<Hostel> {
    return this.http.get<Hostel>(`${this.apiUrl}/${id}`);
  }

  addHostel(hostel: Hostel): Observable<Hostel> {
    return this.http.post<Hostel>(this.apiUrl, hostel);
  }

  updateHostel(id: number, hostel: Hostel): Observable<Hostel> {
    return this.http.put<Hostel>(`${this.apiUrl}/${id}`, hostel);
  }

  deleteHostel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
