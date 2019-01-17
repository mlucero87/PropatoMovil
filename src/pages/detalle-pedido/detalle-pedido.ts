import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle-pedido',
  templateUrl: 'detalle-pedido.html',
})
export class DetallePedidoPage {

  DetallePedido: any;
  Remito: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Remito = navParams.data['Remito'];
    console.log(this.Remito);
  }

}
