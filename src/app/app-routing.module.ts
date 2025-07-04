import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CurdComponent } from './curd/curd.component';
import { SettingsComponent } from './settings/settings.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NrtComponent } from './nrt/nrt.component';
import { HostelListComponent } from './components/hostel-list/hostel-list.component';
import { HostelFormComponent } from './components/hostel-form/hostel-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'businesses', component: BusinessesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'home',component:HomeComponent},
  {path:'settings',component:SettingsComponent},
  {path:'image-slider',component:ImageSliderComponent},
  {path:'nrt',component:NrtComponent},

{path:'curd',component:CurdComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Default route for home
  { path: '**', component: NotFoundComponent } ,
  { path: '', component: HostelListComponent },
  { path: 'add', component: HostelFormComponent },
  { path: 'edit/:id', component: HostelFormComponent },// Wildcard route for 404 Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
