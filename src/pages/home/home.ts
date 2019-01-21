import { DetalleRutaPage } from './../detalle-ruta/detalle-ruta';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuarioProvider } from '../../providers/usuario/usuario';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private _usuarioProvider: UsuarioProvider) {
  }

  login() {
    this._usuarioProvider.borrarUsuarioStorage();
    this.navCtrl.setRoot(LoginPage);
  }
}

