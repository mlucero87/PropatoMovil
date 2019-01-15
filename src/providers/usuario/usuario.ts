import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from 'ionic-angular';
import { platformBrowser } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';

@Injectable()
export class UsuarioProvider {
  Password:string = "";
  User:string = "";
  SessionID:string = "";
  private doc:Subscription;
  
  constructor(private afDB: AngularFirestore, private platform:Platform, private storage:Storage) {

  }

  verificarUsuario(user:string,Password:string){
    Password = Password.toLocaleLowerCase();
    return new Promise((resolve,reject)=>{
      this.doc = this.afDB.collection('usuarios')
        .valueChanges()
        .subscribe(data => {
          if(data){
            let Usuario = data.filter(dato => dato.LogNameNet === user && dato.Password === Password );
            if(Usuario.length === 1){
              this.Password = Usuario[0].Password;
              this.User = Usuario[0].LogNameNet;
              this.guardarStorage();
              resolve(true);
            } else{
              resolve(false);
            }
        }
      })
    });  
  }

  guardarStorage(){
   if(this.platform.is('cordoba')){
      //Celular
      this.storage.set('User',this.User);
      this.storage.set('SessionID',this.SessionID);
   }
   else{
      //navegador
      localStorage.setItem('User',this.User);
      localStorage.setItem('SessionID',this.SessionID);
   }
  }

  obtenerStorage(){
    return new Promise((resolve,reject) =>{
      if(this.platform.is('cordoba')){
        //Celular
        this.storage.get('User').then((val) => {
         if(val){
           this.User = val;
           resolve(true);
         }
         else{
           resolve(false);
         }
        });

     }
     else{
        //navegador
        if(localStorage.getItem('User'))
          {
            this.User = localStorage.getItem('User');
            resolve(true)
          }
          else{
            resolve(false);
          }

     }

    })
  }

  borrarUsuario(){
    this.Password = null;
    if(this.platform.is('cordoba')){
      this.storage.remove('User');
    }else{
      localStorage.removeItem('User');
    }
    this.doc.unsubscribe();
  }

}
