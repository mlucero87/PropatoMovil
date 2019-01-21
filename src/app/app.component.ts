import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { ScanPage } from './../pages/scan/scan';
import { DetalleRutaPage } from './../pages/detalle-ruta/detalle-ruta';
import { RutaPage } from './../pages/ruta/ruta';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: any = LoginPage;
  DetalleRuta = DetalleRutaPage;
  Scan = ScanPage;
  Ruta = RutaPage;
  Home = HomePage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _usuarioProvider: UsuarioProvider, private menuCtrl :MenuController) {
    platform.ready().then(() => {
      _usuarioProvider.validarSessionID().then(existe => {
        statusBar.styleDefault();
        splashScreen.hide();
        if (existe) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      });
    });
  }

  open(page:any){
    this.rootPage = page;
    this.menuCtrl.toggle();
  }

  login() {
    this._usuarioProvider.borrarUsuarioStorage();
    this.menuCtrl.toggle();
    this.rootPage = LoginPage;
  }
}

