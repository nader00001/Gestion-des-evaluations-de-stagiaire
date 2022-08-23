import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EvalService } from '../evalservice.service';
import { Eval, User } from '../user';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  submitted = false;
  appeval: Eval={

    note: 0,
    date:'',
  }
  valeurs : Array<number>=[0,0,0,0]
  service: any;
  titres=[
    {
      titre1:'Evaluation de Formateur',
      titre2:'Maitrise du sujet, qualite pedagogique (rythme, communication, ...), gestion de temps, conformite au programme',
    },
    {
      titre1:'Evaluation de L enveronnement',
      titre2:'Acceuil , salle de formation , pause, ...',
    },
    {
      titre1:'Evaluation des Moyens pedagogiques',
      titre2:'Materiel infomatique , support de cours , connexion , ...',
    },
    {
      titre1:'Evaluation de La Formation',
      titre2:'Objectifs atteints',
    },  
  ]
  constructor(private evalService:EvalService ,private router:Router) { }

  somme =0 ;
  ngOnInit(): void {
  }

  // function calcul()
  // {
  //   let s:number;
  //   s=0;
  //   let tab:number[];
  //   tab = [5 ,4 , 3 , 0];
  //   const chekbox = document.getElementById('case1',) as HTMLInput | null ;
  //   if (chekbox.checked==true) {
  //     s+=tab[0];
  //     console.log(s);

  //   }
  // }

   calcul()
  {
    this.somme=this.valeurs.reduce((v ,a)=>v+a);
    
    // console.log(a);
  }

  userForm = new FormGroup ({
    'note' : new FormControl( 0 , Validators.required),
    'evalf':new FormControl( 0 , Validators.required),
    'evale':new FormControl( 0 , Validators.required),
    'evalm':new FormControl( 0 , Validators.required),
    'evalo':new FormControl( 0 , Validators.required)
  });

  saveval(): void {
    //this.test()
      
      this.evalService.createData(this.somme).subscribe({
        next: (res:any) => {
         // console.log(res);
          this.submitted = true;
          this.router.navigate(['/home'])
        },
       // error: (e) => console.error(e)
      });

      };

      remplir(ch:number , i:number)
      {
        // console.log(ch);
        this.valeurs[i]=ch;
        // console.log(this.valeurs);
        this.calcul();
      }





  // userForm = new FormGroup ({
  //   'Intitule': new FormControl(null ,Validators.required),
  //   'Nomf': new FormControl(null , Validators.required),
  //   'date' : new FormControl(null , Validators.required),
  //   'lieu' :new FormControl(null , Validators.required),
  //   'Nomp' :new FormControl(null , Validators.required),
  //   'etabli' :new FormControl(null , Validators.required),
  //   'datef' : new FormControl(null , Validators.required)
  // });

    }
