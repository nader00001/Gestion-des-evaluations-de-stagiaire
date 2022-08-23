import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestService } from '../questservice.service';
import { Quest } from '../user';
import {ActivatedRoute, Router}  from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  
  
  
  constructor(private questService:QuestService , private router:Router) { }
  submitted = false;
  // appquest: Quest = {
  //   id: 0,
  //   text_lequel: '',
  //   text_nom: '',
  //   tel: 0,
  //   fax: 0,
  //   email:'',
  //   text_sug:'',
    
  // };
  questForm:FormGroup = new FormGroup ({
    'text_lequel' : new FormControl( null , Validators.required),
    'text_nom':new FormControl( null , Validators.required),
    'tel':new FormControl(null , Validators.required),
    'fax':new FormControl( null , Validators.required),
    'email':new FormControl( null , Validators.required),
    'text_sug':new FormControl( null , Validators.required)
  });
  
  ngOnInit(): void {
  }
  savequest(): void {
    //this.test()
      const data = {
        text_lequel: this.questForm.get('text_lequel'),
        text_nom: this.questForm.get('text_nom'),
        tel: this.questForm.get('tel'),
        fax:this.questForm.get('fax'),
        email:this.questForm.get('email'),
        text_sug:this.questForm.get('text_sug')
        
        
        
      };
       
      this.questService.createData(this.questForm.value).subscribe(
        (res )=>{console.log(this.questForm.value);
          this.router.navigate(['/'])
        },

        (error )=>{console.log(error);}
       // error: (e) => console.error(e)
      );
  }
  get questform()
{
  return this.questForm.value ;
}
  }
     




