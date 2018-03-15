

// 所有的模块注入

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

// 路由注入
import { RouterModule }   from '@angular/router';
 
import { AppComponent }  from './app.component';

import { HeroesComponent }  from './heroes/heroes.component';
import { DashboardComponent }  from './heroes/dashboard.component';
import { HeroDetailComponent }  from './common/hero/hero-detail.component';
// 路由
import { AppRoutingModule }     from './app-routing.module';


// 指令注入
import { LoadingDirective }     from '../directive/loading.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // 路由配置
    AppRoutingModule
  ],
  // 组件在使用之前必须在此声明
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    LoadingDirective
  ],
  bootstrap: [ AppComponent ]
})




export class AppModule { }