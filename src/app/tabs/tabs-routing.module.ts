import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracoesPage } from '../configuracoes/configuracoes.page';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes.page';
import { IntroPage } from '../intro/intro.page';
import { PerfilPage } from '../perfil/perfil.page';
import { SobrePage } from '../sobre/sobre.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroPage,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('../intro/intro.module').then(m => m.IntroPageModule)
      }
    ]
  },
  {
    path: 'configuracoes',
    component: ConfiguracoesPage,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('../configuracoes/configuracoes.module').then(m => m.ConfiguracoesPageModule)
      }
    ]
  },
  {
    path: 'filme-detalhes',
    component: FilmeDetalhesPage,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('../filme-detalhes/filme-detalhes.module').then(m => m.FilmeDetalhesPageModule)
      }
    ]
  },

  {
    path: 'sobre',
    component: SobrePage,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('../sobre/sobre.module').then(m => m.SobrePageModule)
      }
    ]
  },
  {
    path: 'perfil',
    component: PerfilPage,

    children: [
      {
        path: '',
        loadChildren: () =>
          import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      }
    ]
  },

  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
