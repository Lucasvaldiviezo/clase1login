import { Component } from '@angular/core';
import { Suma } from './Entidades/suma';
import { Usuario } from './Entidades/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string; 
  miTipo:string = 'text';
  miSuma:Suma;
  miUsuario:Usuario;

  constructor()
  {
    this.title = 'clase1ejercicio';
    this.miSuma = new Suma();
    this.miUsuario = new Usuario();
  }

  mostrarAlert(){
    //this.title = "cambiando titulo";

    console.info(this.title);
  }




}
