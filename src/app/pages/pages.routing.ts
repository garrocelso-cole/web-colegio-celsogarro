import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { habitacionesComponent } from './habitaciones/habitaciones.component';

import { ServiciosComponent } from './servicios/servicios.component';
import { NoticiasComponent } from './noticias/noticias.component';

import { EventosComponent } from './eventos/eventos.component';
import { AliadosComponent } from './aliados/aliados.component';

import { ContactoComponent } from './contacto/contacto.component';
import { NormatividadesComponent } from './normatividades/normatividades.component';

import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [

    {
        path: 'inicio',
        component: PagesComponent,
        children: [
          { path: '', component: InicioComponent },
          { path: 'nosotros', component: NosotrosComponent },
          { path: 'gestion', component: habitacionesComponent },
          { path: 'noticias', component: NoticiasComponent },
          { path: 'aliados', component: AliadosComponent },
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
export class PagesRoutingModule {}
