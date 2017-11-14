

// 所有的模块注入

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
 
import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 组件在使用之前必须在此声明
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }