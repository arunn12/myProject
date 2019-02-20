import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-admin-viewbooked',
  templateUrl: './admin-viewbooked.component.html',
  styleUrls: ['./admin-viewbooked.component.css']
})
export class AdminViewbookedComponent implements OnInit {
   card: any;
  constructor(private http: Http) {

    // this.http.get('http://192.168.192.47:8081/customer', {}).subscribe(response => {
      this.http.get('http://10.21.4.78:8081/sslcstudent', {}).subscribe(response => {
    this.card = JSON.parse(response["_body"]);
      console.log(response);
      console.log(this.card);
    });



   }

  ngOnInit() {
  }

}
