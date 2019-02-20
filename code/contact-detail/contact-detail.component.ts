import { Component, OnInit,Injectable} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})

@Injectable()
export class ContactDetailComponent implements OnInit {

 contacting: any; 
 ramp : any;
  constructor(private http: Http,public route:ActivatedRoute) { 
     this.contacting={
      name:'',
      mail:'',
      mobile:'',
      message:'',

          } 
          
  }

  ngOnInit() {
  }
  goContact(){    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
     let body= JSON.stringify(this.contacting);
     
     console.log(this.contacting);
    //  this.http.post('http://192.168.192.47:8081/mycontact',body,{headers:headers}).subscribe(response => {
      this.http.post('http://10.21.4.78:8081/mycontact',body,{headers:headers}).subscribe(response => { 
    console.log(response);
   });
  }
}  
