

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroesComponent }  from './pages/heroes/heroes.component';
import { DashboardComponent }  from './pages/dashboard/dashboard.component';
import { HeroDetailComponent }  from './common/hero/hero-detail.component';
import { TestComponent } from './pages/test/test.component';
import { HeroesModule } from './pages/heroes/heroes.module';


const routes: Routes = [
  // 路由重定向
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // 基本路由配置
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'test', component: TestComponent },
//   { path: 'heroes', loadChildren: './pages/heroes/heroes.module#HeroesModule' },
];

export let AppRoutingModule = RouterModule.forRoot(routes, {
    // 启停hash模式
    useHash: true
});

