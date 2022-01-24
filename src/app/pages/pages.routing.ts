import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EventosComponent } from './eventos/eventos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [

    {
        path: 'inicio',
        component: PagesComponent,
        children: [
          { path: '', component: InicioComponent },
          { path: 'nosotros', component: NosotrosComponent },
          { path: 'habitaciones', component: HabitacionesComponent },
          { path: 'servicios', component: ServiciosComponent },
          { path: 'eventos', component: EventosComponent },
          { path: 'contacto', component: ContactoComponent },
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
