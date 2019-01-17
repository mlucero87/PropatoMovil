import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DetallePedidoPage } from './../pages/detalle-pedido/detalle-pedido';
// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../config/firebase.config';
// Paginas
import { ScanPage } from '../pages/scan/scan';
import { DetalleRutaPage } from './../pages/detalle-ruta/detalle-ruta';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ScanPage,
    DetalleRutaPage,
    DetallePedidoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ScanPage,
    DetalleRutaPage,
    DetallePedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsuarioProvider
  ]
})
export class AppModule { }
