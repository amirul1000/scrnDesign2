import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult,CalendarComponentOptions } from "ion2-calendar";

import {CalendarController} from "ion2-calendar/dist";

import { ToastController , Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


     date: String = new Date().toISOString();
	 
      

	  constructor(public navCtrl: NavController,
	  public modalCtrl: ModalController, 
	  public calendarCtrl:CalendarController,
	  public toastCtrl: ToastController) {


             
	           
	  }


	  _toastWrap(event: string, payload: {}) {
	    let toast = this.toastCtrl.create({
	      message: '${event}: ${JSON.stringify(payload, null, 2)}',
	      duration: 2000,
	    });
	    toast.present()
	  }

	  onChange($event) {

	    console.log('onChange', $event);
	    this._toastWrap('onChange', $event)
	  }

	  onSelect($event) {

	    console.log('onSelect', $event);
	    this._toastWrap('onSelect', $event)
	  }

	 
	  monthChange($event) {

	    console.log('monthChange',$event);
	    this._toastWrap('monthChange', $event)
	  }


 

}
