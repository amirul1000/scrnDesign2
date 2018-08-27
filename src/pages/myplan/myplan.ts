import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ModalController } from 'ionic-angular';
//import { CalendarModal, CalendarModalOptions, DayConfig, CalendarResult,CalendarComponentOptions } from "ion2-calendar";

//import {CalendarController} from "ion2-calendar/dist";


//import { ToastController , Events } from 'ionic-angular';
//https://stackoverflow.com/questions/42305422/how-can-i-use-jquery-with-ionic-2
//https://codepen.io/daveboling/pen/jWOorz
import * as $ from 'jquery';


@IonicPage()
@Component({
  selector: 'page-myplan',
  templateUrl: 'myplan.html'
})
export class MyplanPage {


	  constructor(public navCtrl: NavController) {

            
                $(document).ready(function() { 

				          /*  var offset1 = $('.line1').offset();
						    var x_pos1 = offset1.left;
						    var y_pos1 = offset1.top;


						    var offset2 = $('.line4').offset();
						    var x_pos2 = offset2.left;
						    var y_pos2 = offset2.top;

						    for(i=y_pos1;i<y_pos2;i=i+1)
						    {
                                 

						    }*/


					   		  function lineDistance(x, y, x0, y0){
							    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
						 	};

							function drawLine(a, b, line) {
							  var pointA = $(a).offset();
							  var pointB = $(b).offset();
							  var pointAcenterX = $(a).width() / 2;
							  var pointAcenterY = $(a).height() / 2;
							  var pointBcenterX = $(b).width() / 2;
							  var pointBcenterY = $(b).height() / 2;
							  var angle = Math.atan2(pointB.top - pointA.top, pointB.left - pointA.left) * 180 / Math.PI;
							  var distance = lineDistance(pointA.left, pointA.top, pointB.left, pointB.top);

							  // INFO
							  $('.info .point-a').text('Point-A: Left: ' + pointA.left + ' Top: ' + pointA.top);
							  $('.info .point-b').text('Point-B: Left: ' + pointB.left + ' Top: ' + pointB.top);
							  $('.info .angle').text('Angle: ' + angle);
							  $('.info .distance').text('Distance: ' + distance);

							  // Set Angle
							  $(line).css('transform', 'rotate(' + angle + 'deg)');

							  // Set Width
							  $(line).css('width', distance + 'px');
							                  
							  // Set Position
							  $(line).css('position', 'absolute');
							  if(pointB.left < pointA.left) {
							    $(line).offset({top: pointA.top + pointAcenterY, left: pointB.left + pointBcenterX});
							  } else {
							    $(line).offset({top: pointA.top + pointAcenterY, left: pointA.left + pointAcenterX});
							  }
							}

						    setInterval(function() {
							  drawLine('.line1', '.line4', '.line');
							});
				        

				    });
							     


	  }


	 onDaySelect($event){

	     alert($event);
	 }

     


		

}
