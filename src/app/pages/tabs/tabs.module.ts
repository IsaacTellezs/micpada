import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { RouterModule } from '@angular/router';
import { appCheckInstance$ } from '@angular/fire/app-check';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild([
      {
        path: 'tabs',
        component: TabsPage,
        children: [
          {
            path: 'home',
            loadChildren: () => import('../landing/landing.module').then(m => m.LandingPageModule)
          },
          {
            path: 'about',
            loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
          },
          {
            path: 'calculator',
            loadChildren: () => import('../calculator/calculator.module').then(m => m.CalculatorPageModule)
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]),
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}



