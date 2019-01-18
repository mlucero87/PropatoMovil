import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DetalleRutaPage } from '../detalle-ruta/detalle-ruta'

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  realizarScanRuta() {
    this.barcodeScanner.scan().then(barcodeData => {
      if (barcodeData.cancelled == false && barcodeData.text != null) {
        this.navCtrl.push(DetalleRutaPage,barcodeData.text);
      }

    }).catch(err => {
      console.log('Error', err);
    });
  }

}
