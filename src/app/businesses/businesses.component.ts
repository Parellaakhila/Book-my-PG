// businesses.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent  {
  name_of_fertilizer: string = '';
  nitrogen_content: string = '';
  potassium_content: string = '';
  phosphorus_content:string='';
  name_of_crops_used:string='';
  message: string='' ;
  messageClass: string='' ;

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    
    
    this.http.post<any>('http://localhost:8080/user/fertilizer', {
      name_of_fertilizer: this.name_of_fertilizer,
      nitrogen_content: this.nitrogen_content,
      potassium_content: this.potassium_content,
      phosphorus_content:this.phosphorus_content,
      name_of_crops_used:this.name_of_crops_used
    }).subscribe(
      response => {
        // Handle successful registration
        
        this.message = 'data successfully added!';
        this.messageClass = 'success';
        
        // Clear input fields
        this.name_of_fertilizer = '';
        this.nitrogen_content = '';
        this.potassium_content = '';
        this.phosphorus_content ='';
        this.name_of_crops_used='';
        
        // Navigate to login page after 2 seconds
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error => {
        // Handle error
        if (error.status === 400 && error.error.message === 'Username already taken') {
          this.message = 'Username already taken. Please choose a different username.';
        } else {
          this.message = 'Data Successfully added';
        }
        this.messageClass = 'error';
      }
    );
   
      // Your registration logic here
      // This is just an example, you need to handle form data and call your API.
      
  }
  
}
