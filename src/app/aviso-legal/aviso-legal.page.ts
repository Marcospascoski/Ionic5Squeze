import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.page.html',
  styleUrls: ['./aviso-legal.page.scss'],
})
export class AvisoLegalPage implements OnInit {

  nomeDoProdutor: any;

  constructor() {
    this.nomeDoProdutor = 'Nome Do Produtor';
  }

  ngOnInit() {
  }

}
