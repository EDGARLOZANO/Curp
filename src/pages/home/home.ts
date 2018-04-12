import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MostrarPage} from '../mostrar/mostrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public cadena:any={
  curp:''
    
  }

  constructor(public navCtrl: NavController) {

  }
  validar(){
    
    if(this.cadena.curp.substring(10,11)==='H'){
      
    this.navCtrl.push(MostrarPage, {
           data: 'H',
          
          });
          
        }
      else{
       
        this.navCtrl.push(MostrarPage, {
          data:'M'
     });
      }
      
      }
}
