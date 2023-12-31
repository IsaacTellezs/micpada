import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../../pages/landing/landing.module').then( m => m.LandingPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./../../pages/about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'calculator',
        loadChildren: () => import('./../../pages/calculator/calculator.module').then( m => m.CalculatorPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
