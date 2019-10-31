import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html'
})
export class FeedPage implements OnInit {

  public objFeed = {
    titulo: "Meu App de Futebol",
    data: new Date(),
    descricao: "Este é um famoso app para selecionar jogadores, organizar churrasco e mais..."
  }

  public nomeUsuario: string = "Gilberto Savisky";
  constructor() { }

  ngOnInit() {
  }

}
