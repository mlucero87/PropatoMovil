import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalleRutaPage } from '../detalle-ruta/detalle-ruta'
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-ruta',
  templateUrl: 'ruta.html',
})
export class RutaPage {

  dataRutas: any = [
    { CodigoRuta: "R001", Destinos: 4, Remitos: 6, Kilos: 1290, Bultos: 650 },
    { CodigoRuta: "R002", Destinos: 6, Remitos: 6, Kilos: 1200, Bultos: 1200 },
    { CodigoRuta: "R003", Destinos: 3, Remitos: 3, Kilos: 1590, Bultos: 150 },
    { CodigoRuta: "R004", Destinos: 7, Remitos: 7, Kilos: 1190, Bultos: 756 },
    { CodigoRuta: "R005", Destinos: 2, Remitos: 3, Kilos: 1480, Bultos: 476 },
    { CodigoRuta: "R006", Destinos: 9, Remitos: 9, Kilos: 1341, Bultos: 876 }

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,private platform: Platform, private storage: Storage) {
  }

  ponerRutaEnCurso(CodigoRuta){
    if (this.platform.is('cordoba')) {
      //Celular
      this.storage.set('CodigoRuta', CodigoRuta);
    }
    else {
      //navegador
      localStorage.setItem('CodigoRuta',CodigoRuta);
    }

  this.navCtrl.setRoot(DetalleRutaPage);
  this.navCtrl.goToRoot;
  }
}
