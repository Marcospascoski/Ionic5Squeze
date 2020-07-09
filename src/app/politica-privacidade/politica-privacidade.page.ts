import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-privacidade',
  templateUrl: './politica-privacidade.page.html',
  styleUrls: ['./politica-privacidade.page.scss'],
})
export class PoliticaPrivacidadePage implements OnInit {


  TextoNomeDoSite: any;

  constructor() {
    this.TextoNomeDoSite = 'Nome Do Site';
  }

  ngOnInit() {
  }

}
