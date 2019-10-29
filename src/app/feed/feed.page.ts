import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html'
})
export class FeedPage implements OnInit {

  public nomeUsuario: string = "Gilberto Savisky";
  constructor() { }

  ngOnInit() {
  }

}
