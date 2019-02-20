import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-viewcust',
  templateUrl: './admin-viewcust.component.html',
  styleUrls: ['./admin-viewcust.component.css']
})
export class AdminViewcustComponent implements OnInit {
contactt:any;

  constructor(private http: Http,private router: Router) { 


    // this.http.get('http://192.168.192.47:8081/getcontact', {}).subscribe(response => {
      this.http.get('http://10.21.4.78:8081/getcontact', {}).subscribe(response => {
    this.contactt = JSON.parse(response["_body"]);
      console.log(response);
      console.log(this.contactt);

    });
  }
 

  ngOnInit() {
  }

}