import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


    goToRegister() {
    // go to the Register component
    this.navCtrl.push('RegisterPage');
  }


  

}
