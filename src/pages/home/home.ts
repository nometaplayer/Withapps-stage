import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1 } from '../Page1/home';
@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
    
  }
  goToHome(){
    this.navCtrl.push(Page1);
  }

}
