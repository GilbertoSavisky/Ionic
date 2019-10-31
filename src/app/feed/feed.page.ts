import { Component, OnInit } from '@angular/core';
import { MoovieService } from '../Provider/moovie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html'
})
export class FeedPage implements OnInit {

  public objFeed = {
    nomeUsuario: 'Gilberto Savisky',
    titulo: 'Meu App de Futebol',
    data: new Date(),
    descricao: 'Este é um famoso app para selecionar jogadores, organizar churrasco e mais...'
  }

  public listaFilmes= new Array<any>();

  constructor(private moovieService: MoovieService) { }

  ngOnInit() {
    this.moovieService.getLatesMovies().subscribe(
      data => {
        // const response = (data as any);
        // const objRetorn = JSON.parse(response._body);
        this.listaFilmes = data.results;
        console.log(this.listaFilmes);
      }, error => {
        console.log(error);
      }
      
      )
  }

}
