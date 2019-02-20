import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
loggin:any;
addmin:any;
  constructor(private http: Http,public route: ActivatedRoute,private router: Router) {
    this.loggin = {
      name: '',
      password: '',
       }
      }
  ngOnInit() {

    
  }

  goAdmin()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(this.loggin);
    
    console.log(this.loggin);
    // this.http.post('http://192.168.192.47:8081/adlog', body, { headers: headers }).subscribe(response => {
      this.http.post('http://10.21.4.78:8081/adlog', body, { headers: headers }).subscribe(response => { 
    
    console.log(response);
 this.addmin=JSON.parse(response['_body'])
 
 if(this.addmin.name == this.loggin.name){


  this.router.navigate(['admin-page']);
console.log("hi");
} 
 
    });
    

}
}
