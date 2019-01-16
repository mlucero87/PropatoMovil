import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { HomePage } from '../home/home';
import { Md5 } from 'ts-md5/dist/md5';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuarioAutenticado: boolean = true;
  LogNameNet: string = "";
  Password: string = "";
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public _usuarioProvider: UsuarioProvider) {
  }

  verificarUsuario() {
    let loading = this.loadingCtrl.create({
      content: 'verificando'
    });
    loading.present();

    let password: any = Md5.hashStr(this.Password.toLowerCase());
    this._usuarioProvider.verificarUsuario(this.LogNameNet.toLowerCase(), password)
      .then(existe => {
        loading.dismiss();
        if (existe) {
          this.navCtrl.setRoot(HomePage);
        }
        else {
          this.usuarioAutenticado = false;
        }
      });
  }
}
