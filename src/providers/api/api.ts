import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


export class Params {
  sane: any[];
  q: string[];
  app_key: string[];
  app_id: string[];
}

export class Ingredient {
  text: string;
  weight: number;
}



export class Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: any[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  totalTime: number;

}

export class Hit {
  recipe: Recipe;
  bookmarked: boolean;
  bought: boolean;
}

export class RootObject {
  q: string;
  from: number;
  to: number;
  params: Params;
  more: boolean;
  count: number;
  hits: Hit[];
}

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
  
  Key = '&app_id=5062cfc7&app_key=b60ea671e9401a57906bc79e7093cbeb';

  //apiUrl = 'https://jsonplaceholder.typicode.com';

  // public async getRecipesByingredient(ingredient:string):Promise<any> {

  //   return new Promise(resolve => 
  //     {
  //       this.http.get(this.Url + ingredient + this.Key)
  //       .toPromise();
        
  //     })
  // } //

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
