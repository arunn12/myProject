import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {
  
  contactt: any;
  gall: any;
  ery: any;
  constructor(private http: Http,private router: Router) {

    this.gall = {
      DeptName: '',
      Description: '',
      Fees: '',
    }

  }
  ngOnInit() {
  }
viewBooked(){

  this.router.navigate(['admin-viewbooked']);

}

viewBook(){

  this.router.navigate(['admin-viewstud']);

}

viewContact(){

  this.router.navigate(['admin-viewcust']);

}
  goGallry() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(this.gall);

    console.log(this.gall);
    // this.http.post('http://192.168.192.47:8081/adgallry', body, { headers: headers }).subscribe(response => {
      this.http.post('http://10.21.4.78:8081/adgallry', body, { headers: headers }).subscribe(response => {
      console.log(response);
    });
  }
}