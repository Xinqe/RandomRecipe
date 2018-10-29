import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider  } from '../../providers/api/api';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,   public RestApi:ApiProvider) {
// this.search('chicken');
// console.log(this.Data);
  }

Data:any;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.search('chicken');
  console.log("THIS IS CREATED ON INIT");
 //console.log(this.Data);
}

public search(ingredient:string)
{
  this.RestApi.getRecipesByingredient(ingredient)
  .then(data => {
    this.Data = data.hits;
    console.log(this.Data);
  });
  //this.Data = this.RestApi.getRecipesByingredient("chicken");
  console.log(this.Data);
}

}



