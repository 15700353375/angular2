/**
 * @作者: changh
 * @时间: 2018-03-15
 * @描述: 顶部导航
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 存在路由跳转的地方都需要引入路由--无论是html的routerLink 或者是ts的navigate
import { RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeroDetailComponent
  ],
  exports: [
    HeroDetailComponent
  ]
})
export class HeroDetailModule { }
