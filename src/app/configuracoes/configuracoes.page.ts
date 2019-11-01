import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'menu-example',
  templateUrl: './configuracoes.page.html'
})
export class ConfiguracoesPage {

  constructor(private menu: MenuController, private route: Router) { }

  abrirPerfil() {
    this.route.navigate(['/tabs/tab1']);
  }
}
