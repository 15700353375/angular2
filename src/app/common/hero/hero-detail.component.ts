
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';
// 引入公共类
import { Hero } from './hero';

import { HeroService } from '../../../service/hero.service';
 // 创建一个Hero类

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})


// 我们告诉这个类，我们要实现OnInit接口。
export class HeroDetailComponent {
  @Input() set heroItem(_data:number){
    console.log(_data);
    this.heroId = _data
    if(this.heroId){
      this.getDetail()
    }
  }
  heroId:any;
  hero:any;
   // 然后注入ActivatedRoute和HeroService服务到构造函数中，将它们的值保存到私有变量中：
   constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {};

  ngOnInit(): void {
    // 获取到id、并使用这个id获取到英雄数据
    if(this.route.snapshot.params['id']){
      this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
    }
   
  }
  getDetail(){
    this.heroService.getHero(this.heroId).then( res => {
      this.hero = res
    })
  }
  
  // 回退
  goBack(): void {
    this.location.back();
  }
}