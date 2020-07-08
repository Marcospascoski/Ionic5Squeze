import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

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

  autoplay: any = '?rel=0&arp;autoplay=1';

  constructor(
    private iab: InAppBrowser,
    private sanitizer: DomSanitizer,
    private router: Router
    ) {
    this.tituloPagina = 'Título Página';
    this.headLine = 'Aqui será Nossa headline';
    this.tituloBotao = 'Entrar Grupo do Facebook';
    this.politicaPrivacidade = 'Politíca de Privacidade';
    this.avisoLegal = 'Aviso Legal';
    this.url = 'https://www.youtube.com/embed/FFTP74EVXeY';
    this.ObterVideoUrl(this.url + this.autoplay);
  }

  IrParaGrupoFB() {
    this.iab.create('https://www.facebook.com/groups/605404313412928');
  }

  ObterVideoUrl(url) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  navegarPaginaPrivacidade() {
    this.router.navigate(['/politica-privacidade']);
  }

  navegarPaginaAvisoLegal() {
    this.router.navigate(['/aviso-legal']);
  }
}
