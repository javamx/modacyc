import { Routes, RouterModule } from '@angular/router';
import {
  ProductoComponent,
  PortafolioComponent,
  SearchComponent
} from './components/index.paginas';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(routes, { useHash: true });
