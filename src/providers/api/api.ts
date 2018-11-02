import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  Url = 'https://api.edamam.com/search?q=';
  
  Key = '&app_id=5062cfc7&app_key=b60ea671e9401a57906bc79e7093cbeb&to=100';


  public  getRecipesByingredient(ingredient:string){

    return new Promise(resolve => {
      this.http.get(this.Url+ ingredient + this.Key).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });   


}

  

}
