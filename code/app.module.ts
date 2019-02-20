import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { AdminViewcustComponent } from './admin-viewcust/admin-viewcust.component';
import { AdminViewbookedComponent } from './admin-viewbooked/admin-viewbooked.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AlertsModule } from 'angular-alert-module';
import { BookingSectionComponent } from './booking-section/booking-section.component';
import { BookSectionComponent } from './book-section/book-section.component';
import { AdminViewstudComponent } from './admin-viewstud/admin-viewstud.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactDetailComponent,
    GallerySectionComponent,
    AdminPageComponent,
    AdminloginComponent,
    AdminViewcustComponent,
    AdminViewbookedComponent,
    BookingSectionComponent,
    BookSectionComponent,
    AdminViewstudComponent,

 ],

    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
   AlertsModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
