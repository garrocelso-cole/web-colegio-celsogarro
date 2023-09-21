import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

import { NoticiasComponent } from './noticias/noticias.component';

import { AliadosComponent } from './aliados/aliados.component';

import { NormatividadesComponent } from './normatividades/normatividades.component';

import { InnovacionComponent } from './innovacion/innovacion.component';

import { DetalleComponent } from './detalle/detalle.component';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
  
  {
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'nosotros', component: NosotrosComponent },
      { path: 'gestion', component: GestionComponent },
      { path: 'noticias', component: NoticiasComponent },
      { path: 'aliados', component: AliadosComponent },
      { path: 'innovacion', component: InnovacionComponent },
      { path: 'normatividades', component: NormatividadesComponent },
      { path: 'detalle', component: DetalleComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    ]
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
