import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private s : AdminserviceService      , private router:Router) { 
    localStorage.clear();
  }
  
  
  
  ngOnInit(): void {
  }
  useForm=new FormGroup({
    'adress':new FormControl(null,Validators.required),
    'mdps':new FormControl(null,Validators.required)
  })

  get email(){
    return this.useForm.get('adress');
  }
  readadmin:any;
  a:any;
  b:any;
isadmin:any;
  admin(){
    this.s.getadmin().subscribe((res)=>{
      // console.log("res==>",res)
      // console.log('nader');
      this.readadmin=res.data
      // console.log(this.readadmin[0].mdps)
    //  this.email()=this.useForm.get('email')
      if(this.a==this.readadmin[0].adress && this.b==this.readadmin[0].mdps){
        localStorage.setItem('token',this.readadmin)
         console.log(this.readadmin[0].adress);
        this.isadmin=false
        // console.log(this.isadmin)
       
        this.router.navigateByUrl('/read') 
       
      }
      else{ this.isadmin=false;
        // console.log('mdps false');
      alert('votre mot de passe est fausse !!!');}
      
    });
   
  }

}
