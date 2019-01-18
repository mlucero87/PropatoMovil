import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle-pedido',
  templateUrl: 'detalle-pedido.html',
})
export class DetallePedidoPage {


  DetallePedido: any = [
    {Remito:"R-0009-00321654",Renglon:1,CodigoArticulo:"12203",Descripcion:"JERINGA DES.10ml S/AGUJA", Cantidad:24, Lote:"aaa123", vto:"01/10/2025"},
    {Remito:"R-0009-00321654",Renglon:2,CodigoArticulo:"10200",Descripcion:"PAÑAL ADULTO C/GEL GRANDE (3x50)", Cantidad:5, Lote:"bbb123", vto:"01/08/2025"},
    {Remito:"R-0009-00321654",Renglon:3,CodigoArticulo:"62006",Descripcion:"GUANTES EXAMEN LATEX MEDIANO", Cantidad:100, Lote:"ccc123", vto:"01/05/2025"},
    {Remito:"R-0009-00321654",Renglon:4,CodigoArticulo:"96946",Descripcion:"VENDA ELASTICA BEIGE 15cm x 2,5m", Cantidad:20, Lote:"ddd123", vto:"01/01/2025"},
    {Remito:"R-0009-00321654",Renglon:5,CodigoArticulo:"20419",Descripcion:"ABRE BOCA P/EMERGENCIAS", Cantidad:100, Lote:"eee123", vto:"01/07/2025"},
    {Remito:"R-0009-00321654",Renglon:6,CodigoArticulo:"31364",Descripcion:"AGUJA DESCARTABLE 25x7 22Gx1", Cantidad:90, Lote:"fff123", vto:"01/11/2025"},
    {Remito:"R-0009-00321654",Renglon:7,CodigoArticulo:"16756",Descripcion:"CEPILLO ENDOCERVICAL", Cantidad:50, Lote:"ggg123", vto:"01/04/2025"},
  ];
  
  DetallePedidoTrabajo:any;

  Remito: string = "";
  // this.DetallePedido = [{Remito:"DetallePedido",}];

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
    this.Remito = navParams.data['Remito'];
    this.DetallePedidoTrabajo = this.DetallePedido.filter(ped => ped['Remito'] === this.Remito);

    if(this.DetallePedidoTrabajo.length == 0)
    {
      const toast = this.toastCtrl.create({
        message: 'Ocurrio un error al cargar el pedido o el mismo no tiene detalle',
        duration: 3000,
        position: 'middle'
    });
    toast.present();
      // this.tool.MostrarMensaje("Ocurrio un error al cargar el pedido o el mismo no tiene detalle",5000,"asd");
    }
  }


}
