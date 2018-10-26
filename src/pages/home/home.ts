import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public RestApi:ApiProvider) {
this.search('chicken');
  }

Data:any;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log("THIS IS CREATED ON INIT");
  //console.log(this.search("chicken"));
 // console.log(this.api.getRecipesByingredient("chicken"));
//this.search("potato");   // fel på inläsning? lös detta så bör de vara lätt att fixa en search recipe, sedan slumpmässigt välja 10 av hela datan. 
}

public search(ingredient:string)
{
  this.RestApi.getRecipesByingredient(ingredient)
  .then(data => {
    this.Data = data;
    console.log(this.Data);
  });
}

}
