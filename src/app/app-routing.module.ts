

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroesComponent }  from './heroes/heroes.component';
import { DashboardComponent }  from './heroes/dashboard.component';
import { HeroDetailComponent }  from './common/hero/hero-detail.component';
 

const routes: Routes = [
  // 路由重定向
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // 基本路由配置
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {
      // 启停hash模式
      useHash: true
  })],
    exports: [ RouterModule ]
  })
export class AppRoutingModule {}