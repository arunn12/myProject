import { Component, OnInit,Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-gallery-section',
  templateUrl: './gallery-section.component.html',
  styleUrls: ['./gallery-section.component.css']
})

@Injectable()
export class GallerySectionComponent {
 
 galry: any;

 constructor(private router: Router,public http: Http) {
  // this.http.get('http://192.168.192.47:8081/getgalry', {}).subscribe(response => {
    this.http.get('http://10.21.4.78:8081/getgalry', {}).subscribe(response => {  
  this.galry = JSON.parse(response["_body"]);
    console.log(response);
    console.log(this.galry);
    
  });
  }

 ngOnInit() {
 }
  goBook(rest: any) {
    console.log(rest);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "bookInfo": JSON.stringify(rest),
      },
    };
    this.router.navigate(["home-page"], navigationExtras);
  }
}    