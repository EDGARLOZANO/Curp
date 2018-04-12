import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html'
})
export class MostrarPage {
  mo: any=[]
   
  ;


  constructor(public navCtrl: NavController,public navParams: NavParams) {
    
    if(navParams.get('data')==='H'){
      this.mo.push('Barbon');

    }else{

      this.mo.push('Bonita');
    }
    
    
  }

}
