import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-admin-viewstud',
  templateUrl: './admin-viewstud.component.html',
  styleUrls: ['./admin-viewstud.component.css']
})
export class AdminViewstudComponent implements OnInit {
  card: any;
  constructor(private http: Http) {

    // this.http.get('http://192.168.192.47:8081/customer', {}).subscribe(response => {
    this.http.get('http://10.21.4.78:8081/hscstudent', {}).subscribe(response => {
      this.card = JSON.parse(response["_body"]);
      console.log(response);
      console.log(this.card);
    });
  }

  ngOnInit() {
  }

}