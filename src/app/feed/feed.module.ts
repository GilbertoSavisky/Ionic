import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MoovieService } from '../Provider/moovie.service';
import { FeedPage } from './feed.page';



const routes: Routes = [
  {
    path: '',
    component: FeedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FeedPage
  ],
  providers: [MoovieService]
})
export class FeedPageModule {}
