import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ModalController, Backdrop} from 'ionic-angular';
import { DetallePedidoPage } from './../detalle-pedido/detalle-pedido';
@IonicPage()
@Component({
  selector: 'page-detalle-ruta',
  templateUrl: 'detalle-ruta.html',
})
export class DetalleRutaPage {
  dataRutaAsignada: any = [
    { CodigoRuta: "R001", Destinos: 4, Remitos: 6, Kilos: 1290, Bultos: 650 },
    { CodigoRuta: "R002", Destinos: 6, Remitos: 6, Kilos: 1200, Bultos: 1200 },
    { CodigoRuta: "R003", Destinos: 5, Remitos: 5, Kilos: 1590, Bultos: 784 },
    { CodigoRuta: "R004", Destinos: 7, Remitos: 7, Kilos: 1190, Bultos: 756 },
    { CodigoRuta: "R005", Destinos: 2, Remitos: 3, Kilos: 1480, Bultos: 476 },
    { CodigoRuta: "R006", Destinos: 9, Remitos: 9, Kilos: 1341, Bultos: 876 }

  ];
  dataDetalleRuta: any = [
    { CodigoRuta: "R002", ClienteCodigo: "046310", ClienteRazSoc: "AFRODINA S.A.", ClienteDireccion: "Goleta Sta Cruz 6873 P.4 D.E", Remito: "R-0009-00321654", Bultos: 100, NroGuia: "000012", estado: true },
    { CodigoRuta: "R002", ClienteCodigo: "003751", ClienteRazSoc: "AGILE SYSTEMS S.A.", ClienteDireccion: "ESTOMBA 3875", Remito: "R-0009-00321657", Bultos: 300, NroGuia: "000013", estado: false },
    { CodigoRuta: "R002", ClienteCodigo: "017507", ClienteRazSoc: "ALMIRON-CINTHIA CECILIA", ClienteDireccion: "MANZANARES 1678", Remito: "R-0009-00321612", Bultos: 400, NroGuia: "000014", estado: false },
    { CodigoRuta: "R002", ClienteCodigo: "043966", ClienteRazSoc: "ALVES PEQUENO MONIQUE", ClienteDireccion: "Av. Rivadavia 7055 Dto.15", Remito: "R-0009-00056987", Bultos: 100, NroGuia: "000015", estado: true },
    { CodigoRuta: "R002", ClienteCodigo: "047236", ClienteRazSoc: "ANALEN S.R.L.", ClienteDireccion: "PJE. Prometeo 3108", Remito: "R-0009-00566965", Bultos: 200, NroGuia: "000016", estado: false },
    { CodigoRuta: "R002", ClienteCodigo: "044474", ClienteRazSoc: "ARHMED SERVICIOS DE SALUD S.R.L.", ClienteDireccion: "Montevideo 665 P.7 D.715", Remito: "R-0009-00069123", Bultos: 100, NroGuia: "000017", estado: false },
  ]
  title: string = "Ruta Asignada " + this.dataDetalleRuta[0].CodigoRuta;


  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    // this.RutaAsignada = this.navParams.data;
    // console.log(this.RutaAsignada);

  }

  verDetallePedido(dataPedido) {
    console.log(dataPedido);
    this.navCtrl.push(DetallePedidoPage);
    // let profileModal = this.modalCtrl.create(DetallePedidoPage, { Remito: dataPedido.Remito },);
    // profileModal.present();
  }

  verMapa(dataPedido) {
    console.log(dataPedido);
  }
}
