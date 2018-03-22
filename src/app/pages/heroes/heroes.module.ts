/**
 * @作者: changh
 * @时间: 2018-03-15
 * @描述: 英雄左侧导航类
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 存在路由跳转的地方都需要引入路由--无论是html的routerLink 或者是ts的navigate
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailModule } from '../../common/hero/hero-detail.module';
// module
import { NavModule } from '../../common/nav/nav.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroDetailModule,
    // RouterModule.forChild([
    //   {
    //     path: '', component: HeroesComponent, children: [
    //     { path: 'detail/:id', loadChildren: '../../common/hero/hero-detail.module#HeroDetailModule' }
    //   ]
    //   }
    // ]),
    NavModule,
  ],
  declarations: [
    HeroesComponent
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
