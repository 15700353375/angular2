

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
 

const routes: Routes = [
  // 路由重定向
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // 基本路由配置
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRoutingModule {}