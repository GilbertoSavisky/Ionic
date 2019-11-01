import { Component, OnInit } from '@angular/core';
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

  constructor(private moovieService: MoovieService, public loadingController: LoadingController) { }


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
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  ngOnInit() {
    this.presentLoading();
    this.moovieService.getLatesMovies().subscribe(
      data => {
        // const response = (data as any);
        // const objRetorn = JSON.parse(response._body);
        // tslint:disable-next-line:no-string-literal
        this.listaFilmes = data['results'];
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

}
