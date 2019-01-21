import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { DetalleRutaPage } from "../detalle-ruta/detalle-ruta";
import { Platform } from "ionic-angular";
import { Storage } from "@ionic/storage";
@Component({
  selector: "page-scan",
  templateUrl: "scan.html"
})
export class ScanPage {
  rutasFiltradas: any;
  CodigoRuta: string = "";
  dataRutaAsignada: any = [
    { CodigoRuta: "R001", Destinos: 4, Remitos: 6, Kilos: 1290, Bultos: 650 },
    { CodigoRuta: "R002", Destinos: 6, Remitos: 6, Kilos: 1200, Bultos: 1200 },
    { CodigoRuta: "R003", Destinos: 3, Remitos: 3, Kilos: 1590, Bultos: 150 },
    { CodigoRuta: "R004", Destinos: 7, Remitos: 7, Kilos: 1190, Bultos: 756 },
    { CodigoRuta: "R005", Destinos: 2, Remitos: 3, Kilos: 1480, Bultos: 476 },
    { CodigoRuta: "R006", Destinos: 9, Remitos: 9, Kilos: 1341, Bultos: 876 }
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private barcodeScanner: BarcodeScanner,
    private platform: Platform,
    private storage: Storage
  ) {}

  realizarScanRuta() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        if (barcodeData.cancelled == false && barcodeData.text != null) {
          this.setearRutaEnCurso(barcodeData.text);
        }
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  cargarRuta() {
    if (this.CodigoRuta != "") {
      this.rutasFiltradas = this.dataRutaAsignada.filter(
        r => r["CodigoRuta"] === this.CodigoRuta.toUpperCase()
      );
      if (this.rutasFiltradas.length > 0)
        this.setearRutaEnCurso(this.CodigoRuta.toUpperCase());
        else{
          const toast = this.toastCtrl.create({
            message: "No existe la Ruta solicitada",
            duration: 3000,
            position: "middle"
          });
          toast.present();
        }
    } else {
      const toast = this.toastCtrl.create({
        message: "Ingrese la ruta que desea realizar",
        duration: 3000,
        position: "middle"
      });
      toast.present();
    }
  }

  setearRutaEnCurso(CodigoRuta) {
    if (this.platform.is("cordoba")) {
      //Celular
      this.storage.set("CodigoRuta", CodigoRuta);
    } else {
      //navegador
      localStorage.setItem("CodigoRuta", CodigoRuta);
    }

    this.navCtrl.setRoot(DetalleRutaPage);
  }
}
