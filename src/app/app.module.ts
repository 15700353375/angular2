

// 所有的模块注入

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common';
// 路由注入
import { RouterModule }   from '@angular/router';
 
import { AppComponent }  from './app.component';

import { HeroesComponent }  from './pages/heroes/heroes.component';
import { DashboardComponent }  from './pages/dashboard/dashboard.component';
// import { HeroDetailComponent }  from './common/hero/hero-detail.component';
// 路由
import { AppRoutingModule } from './app-routing';


// 指令注入
import { LoadingDirective }     from '../directive/loading.directive';



// module
import { NavModule } from './common/nav/nav.module';
import { TestComponent } from './pages/test/test.component';
import { HeroDetailModule } from './common/hero/hero-detail.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    // 路由配置
    AppRoutingModule,
    HeroDetailModule,
    NavModule
  ],
  // 组件在使用之前必须在此声明
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    // HeroDetailComponent,
    TestComponent,
    LoadingDirective
  ],
  bootstrap: [ AppComponent ]
})




export class AppModule { }