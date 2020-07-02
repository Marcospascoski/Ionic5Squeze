import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tituloPagina: any;
  headLine: any;
  url: any;
  tituloBotao: any;
  politicaPrivacidade: any;
  avisoLegal: any;
  
  constructor() {
    this.tituloPagina = "Título Página";
    this.headLine = "Aqui será Nossa headline";
    this.url = "";
    this.tituloBotao = "Entrar Grupo do Facebook"
    this.politicaPrivacidade = "Politíca de Privacidade";
    this.avisoLegal = "Aviso Legal"
  }

}
