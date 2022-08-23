export class User {
  id?: number;

    Intitule?: string;
    Nomf?: string;
    date?: string;
    lieu?: string;
    Nomp?:string;
    etabli?:string;
    datef?: string;

}

export class Eval{
  id?:number;
  note?: number;
  date?:string;
  user_id?:number;
}
export class Quest{
  id?:number;
  text_lequel?:string;
  text_nom?:string;
  tel?:number;
  fax?:number;
  email?:string;
  text_sug?:string;
  eval_id?:number;
}
export class Admin{
  id_admin?:number;
  adress?:string;
  mdps?:string;
}

