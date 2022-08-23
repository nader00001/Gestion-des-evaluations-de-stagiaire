import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminserviceService } from './adminservice.service';

@Injectable({
  providedIn: 'root'
})
export class GardGuard implements CanActivate {
  constructor(private schare:AdminserviceService , private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve,reject)=>{
            if(this.schare){
              resolve(true)
            }
            else{
              this.route.navigate(["read"])
              resolve(false)
            }
          });
        }
      
  }
  

// canActivate(route: ActivatedRouteSnapshot,
//   state :RouterStateSnapshot):Observable<boolean | UrlTree> |Promise<boolean|UrlTree>| boolean|UrlTree{
//     return new Promise((resolve,reject)=>{
//       if(this.schare.islogin()){
//         resolve(true)
//       }
//       else{
//         this.router.navigate(["read"])
//         resolve(false)
//       }
//     });
//   }
