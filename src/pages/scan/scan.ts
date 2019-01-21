import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DetalleRutaPage } from '../detalle-ruta/detalle-ruta'
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,private platform: Platform, private storage: Storage) {
    this.realizarScanRuta();
  }

  realizarScanRuta() {
    this.barcodeScanner.scan().then(barcodeData => {
      if (barcodeData.cancelled == false && barcodeData.text != null) {
          if (this.platform.is('cordoba')) {
            //Celular
            this.storage.set('CodigoRuta', barcodeData.text);
          }
          else {
            //navegador
            localStorage.setItem('CodigoRuta', barcodeData.text);
          }

        this.navCtrl.push(DetalleRutaPage); 
      }

    }).catch(err => {
      console.log('Error', err);
    });
  }

}
