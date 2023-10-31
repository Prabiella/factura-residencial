import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'facturas/12429976',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: 'menu/12429976',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu/:cliente',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'estado-cuenta',
    loadChildren: () => import('./estado-cuenta/estado-cuenta.module').then( m => m.EstadoCuentaPageModule)
  },
  {
    path: 'facturas/:cliente',
    loadChildren: () => import('./facturas/facturas.module').then( m => m.FacturasPageModule)
  },
  {
    path: 'factura-fiscal',
    loadChildren: () => import('./factura-fiscal/factura-fiscal.module').then( m => m.FacturaFiscalPageModule)
  },
  {
    path: 'datos-fiscales',
    loadChildren: () => import('./datos-fiscales/datos-fiscales.module').then( m => m.DatosFiscalesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
