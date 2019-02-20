import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-book-section',
  templateUrl: './book-section.component.html',
  styleUrls: ['./book-section.component.css']
})

export class BookSectionComponent implements OnInit {
  book: any;
  samp: any;


  constructor(private http: Http, public route: ActivatedRoute, private alerts: AlertsService) {
    this.book = {
      name: '',
      regno: '',
      total: '',
      schname: '',
      dept: '',
      mail: '',
      mobile: '',
      city: '',
      post: '',
      country: '',

    }
  }

  ngOnInit() {
  }

  goBook() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(this.book);

    console.log(this.book);
    // this.http.post('http://192.168.192.47:8081/mybook', body, { headers: headers }).subscribe(response => {
    this.http.post('http://10.21.4.78:8081/mybook', body, { headers: headers }).subscribe(response => {
      console.log(response);
    });



  }
}
