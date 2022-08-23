import { Component, NgModule, OnInit , Injectable } from '@angular/core';
import {FormGroup , Validators , FormControl} from '@angular/forms';
import {MonserviceService} from '../monservice.service';
import {ActivatedRoute, Router}  from '@angular/router';
import { Eval, User } from '../user';





@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  submitted = false;
  appuser: User = {
    id: 0,

    Intitule: '',
    Nomf: '',
    date: '',
    lieu: '',
    Nomp:'',
    etabli:'',
    datef :'',
  };
  appeval: Eval={
    
    note: 0,
    date:'',
  }
  userForm :FormGroup=new FormGroup ({
    'Intitule': new FormControl(null ,Validators.required),
    'Nomf': new FormControl(null , Validators.required),
    'date' : new FormControl(null , Validators.required),
    'lieu' :new FormControl(null , Validators.required),
    'Nomp' :new FormControl(null , Validators.required),
    'etabli' :new FormControl(null , Validators.required),
    'datef' : new FormControl(null , Validators.required)
  });
  succemsg: any;
  errormsg: any;
  getparamid:any;
  constructor( private service:MonserviceService , private router:Router) { }
  // errormsg:any;
  //   succemsg:any;
  //    userForm:any;




  ngOnInit(): void {
    

  }
  saveuser(): void {
    //this.test()
      const data = {
        Intitule: this.userForm.get('Intitule')?.value,
        Nomf: this.userForm.get('Nomf')?.value,
        date: this.userForm.get('date')?.value,
        lieu:this.userForm.get('lieu')?.value,
        Nomp:this.userForm.get('Nomp')?.value,
        etabli:this.userForm.get('etabli')?.value,
        datef:this.userForm.get('datef')?.value


      };
     // console.log(data)
      this.service.createData(data).subscribe(
          (res )=>{console.log(res);
            this.router.navigate(['/evaluation'])
          },

          (error )=>{console.log(error);}
         // error: (e) => console.error(e)
        );
    }
    //updateuser
  
  
  
  // creatnewuser
  //   // updatedata
//   userUpdate()
//   {
//     console.log(this.userForm.value,'updatedform');
//     if(this.userForm.valid)
//     {
//       this.service.uppdateData(this.userForm.value , this.getparamid).subscribe((res:any)=>{
//         console.log(res,'resupdated');
//         this.succemsg = res.message ;

//       });
//     } else{
//       this.errormsg = 'all fieled is required';
//     }
//   }
get Nomf()
{
  return this.userForm.get('Nomf');
}


}
