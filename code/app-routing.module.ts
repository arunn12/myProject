import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { GallerySectionComponent } from './gallery-section/gallery-section.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {AdminViewbookedComponent} from './admin-viewbooked/admin-viewbooked.component';
import { AdminViewcustComponent } from './admin-viewcust/admin-viewcust.component';
import{BookingSectionComponent} from './booking-section/booking-section.component';
import{BookSectionComponent} from './book-section/book-section.component';
import{AdminViewstudComponent} from './admin-viewstud/admin-viewstud.component';

const routes: Routes = [
  { path:'', component:HomePageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'contact-detail', component: ContactDetailComponent },
  { path: 'gallery-section', component: GallerySectionComponent },
  { path:'adminlogin',component: AdminloginComponent },
  { path:'admin-page',component: AdminPageComponent },
  { path:'admin-viewbooked',component: AdminViewbookedComponent },
  { path:'admin-viewcust',component:AdminViewcustComponent },
  {path:'booking-section',component:BookingSectionComponent},
  {path:'book-section',component:BookSectionComponent},
  {path:'admin-viewstud',component:AdminViewstudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpModule,FormsModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
