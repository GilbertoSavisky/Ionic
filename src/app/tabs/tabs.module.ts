import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfiguracoesPageModule } from '../configuracoes/configuracoes.module';
import { FilmeDetalhesPageModule } from '../filme-detalhes/filme-detalhes.module';
import { IntroPageModule } from '../intro/intro.module';
import { PerfilPageModule } from '../perfil/perfil.module';
import { SobrePageModule } from '../sobre/sobre.module';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    IntroPageModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
