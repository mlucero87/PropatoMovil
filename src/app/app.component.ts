import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private _usuarioProvider:UsuarioProvider) {
    platform.ready().then(() => {
      _usuarioProvider.validarSessionID().then(existe=>{
        statusBar.styleDefault();
        splashScreen.hide();
        if(existe){
          this.rootPage = HomePage;
        }else{
          this.rootPage = LoginPage;
        }
      });
    });
  }
}

