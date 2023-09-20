import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitcherComponent } from './shared/switcher/switcher.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';


import { PagesRoutingModule } from './pages/pages.routing';
import { TerminosComponent } from './adicional/terminos/terminos.component';
import { PoliticasComponent } from './adicional/politicas/politicas.component';
import { DerechosComponent } from './adicional/derechos/derechos.component';
import { RegistrosComponent } from './adicional/registros/registros.component';
import { PreguntasComponent } from './adicional/preguntas/preguntas.component';

const routes: Routes = [
 
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '#', component: SwitcherComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'derechos', component: DerechosComponent },
  { path: 'registros', component: RegistrosComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: '**', component: PaginaerrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    anchorScrolling: "enabled", initialNavigation: 'enabled'}),
  PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
