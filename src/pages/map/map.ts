import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  lat: number = -34.600510899999996;
  lng: number = -58.5486797;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
