import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider  } from '../../providers/api/api';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,   public RestApi:ApiProvider) {
  }

Data:any;
queryInput:string;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
 // console.log("THIS IS CREATED ON INIT");

}

public search(ingredient:string)
{
  this.RestApi.getRecipesByingredient(ingredient)
  .then(data => {
    this.Data = data.hits;
    console.log(this.Data); 
  });

  console.log(this.Data);
}

public btnSearch(event)
{
  console.log(this.queryInput);
  if(this.queryInput !== undefined)
  {
    this.search(this.queryInput);
  }

}

public btnRecipeDetails(event, item)
 {
 console.log(event);
 console.log(item);
 }
// randomInt(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

}



