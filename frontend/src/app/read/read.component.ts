import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EvalService } from '../evalservice.service';
import {MonserviceService} from '../monservice.service'
import { QuestService } from '../questservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  userForm: any;
  errormsg: any;
  getparamid:any;
  constructor( private service:MonserviceService , private evalService: EvalService , private questService:QuestService) { }
  users:any;
  succemsg:any;
  evals:any;
  quests:any;

  ngOnInit(): void {
    this.evalService.getAllData().subscribe((res:any)=>{
      console.log(res.data );
      this.evals = res.data ;
    });
    this.service.getAllData().subscribe((res:any)=>{
      console.log(res.data );
      this.users = res.data ;
    });
    this.questService.getAllData().subscribe((res:any)=>{
      console.log(res.data );
      this.users = res.data ;
    });
  }

//getdeletedid user
  deleteID(id:any)
  {
    console.log(id , 'deletedid==>');
    this.service.deleteData(id).subscribe((res:any)=>{
      console.log(res , 'deleteres==>');
      this.succemsg = res.message;

      this.service.getAllData().subscribe((res:any)=>{
        console.log(res ,  "res==>");
        this.users = res.data ;
      });
    });
  }
  //deleted eval
  deletID(id:any)
  {
    console.log(id , 'deletedid==>');
    this.evalService.deleteData(id).subscribe((res:any)=>{
      console.log(res , 'deleteres==>');
      this.succemsg = res.message;

      this.evalService.getAllData().subscribe((res:any)=>{
        console.log(res ,  "res==>");
        this.users = res.data ;
      });
    });
  }
  //deleted quest
  deletedID(id:any)
  {
    console.log(id , 'deletedid==>');
    this.questService.deleteData(id).subscribe((res:any)=>{
      console.log(res , 'deleteres==>');
      this.succemsg = res.message;

      this.questService.getAllData().subscribe((res:any)=>{
        console.log(res ,  "res==>");
        this.users = res.data ;
      });
    });
  }
  //update user
  userUpdate()
    {
      //console.log(this.userForm.value,'updatedform');
      if(this.userForm.valid)
      {
        this.service.uppdateData(this.userForm.value , this.getparamid).subscribe((res:any)=>{
          console.log(res,'resupdated');
          this.succemsg = res.message ;
  
        });
      } else{
        this.errormsg = 'all fieled is required';
      }
    }
  // update eval
  evalUpdate()
    {
      //console.log(this.userForm.value,'updatedform');
      if(this.userForm.valid)
      {
        this.evalService.uppdateData(this.userForm.value , this.getparamid).subscribe((res:any)=>{
          console.log(res,'resupdated');
          this.succemsg = res.message ;
  
        });
      } else{
        this.errormsg = 'all fieled is required';
      }
    }
    // update quest
    questUpdate()
    {
      // console.log(this.userForm.value,'updatedform');
      if(this.userForm.valid)
      {
        this.questService.uppdateData(this.userForm.value , this.getparamid).subscribe((res:any)=>{
          console.log(res,'resupdated');
          this.succemsg = res.message ;
  
        });
      } else{
        this.errormsg = 'all fieled is required';
      }
    }

}
