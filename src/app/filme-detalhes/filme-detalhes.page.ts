import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.page.html'
})
export class FilmeDetalhesPage implements OnInit {

  public filme;
  public idFilme;

  constructor(private nav: NavParams) { }

  ngOnInit() {
    this.idFilme = this.nav.get('id');
    console.log('id = ', this.idFilme);
  }

}
