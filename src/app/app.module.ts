import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SettingsComponent } from './settings/settings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { RegisterComponent } from './register/register.component';
import { CurdComponent } from './curd/curd.component';
import { NrtComponent } from './nrt/nrt.component';
import { HostelListComponent } from './components/hostel-list/hostel-list.component';
import { HostelFormComponent } from './components/hostel-form/hostel-form.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusinessesComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    SearchResultsComponent,
    SettingsComponent,
    NotFoundComponent,
    ImageSliderComponent,
    RegisterComponent,
    NrtComponent,
    CurdComponent,
    ImageSliderComponent,
    HostelListComponent,
    HostelFormComponent,
    CitySelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,

    
    FormsModule,
    
    HttpClientModule  // Include HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
