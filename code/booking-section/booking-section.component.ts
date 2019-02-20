import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { AlertsService } from 'angular-alert-module';



@Component({
  selector: 'app-booking-section',
  templateUrl: './booking-section.component.html',
  styleUrls: ['./booking-section.component.css']
})

export class BookingSectionComponent implements OnInit {
  booking: any;
  samp: any;
  constructor(private http: Http, public route: ActivatedRoute, private alerts: AlertsService) {
    this.booking = {
      name: '',
      regno: '',
      total: '',
      schname: '',
      dept:'',
      mail:'',
      mobile: '',
      city: '',
      post: '',
      country: '',

    }
  }
  ngOnInit() {


  }

  goBooking() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(this.booking);

    console.log(this.booking);
    // this.http.post('http://192.168.192.47:8081/mybooking', body, { headers: headers }).subscribe(response => {
      this.http.post('http://10.21.4.78:8081/mybooking', body, { headers: headers }).subscribe(response => {
      
    console.log(response);
    });



  }
}  
