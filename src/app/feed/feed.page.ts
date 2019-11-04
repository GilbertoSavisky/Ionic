import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
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
  };

  public listaFilmes = new Array<any>();
  public loader;
  public refresher;
  public isRefresher = false;

  constructor(
    private moovieService: MoovieService,
    public loadingController: LoadingController,
    public rota: Router
  ) { }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  doRefresh(event) {
      this.refresher = event.target;
      this.isRefresher = true;
      this.carregarFilmes();
    }

    abrirDetalhes(filme) {
      this.rota.navigate(['./filme-detalhes', {id: filme.id}]);
    }

  ngOnInit() {
    this.carregarFilmes();
  }

  carregarFilmes(){
    this.presentLoading();
    this.moovieService.getLatesMovies().subscribe(
      data => {
        // tslint:disable-next-line:no-string-literal
        this.listaFilmes = data['results'];
        this.presentLoading();
        if (this.isRefresher) {
          this.refresher.complete();
          this.isRefresher = false;
          console.log(this.listaFilmes);
        }
      }, error => {
        console.log(error);
      });

  }
}

