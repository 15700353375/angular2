

import { Component } from '@angular/core';
// 路由注入
import { Router } from '@angular/router';
// 现在，有两个组件需要Hero类的引用，所以
import { Hero } from '../../common/hero/hero';
// 导入服务
import { HeroService } from '../../../service/hero.service';
 

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  // 注册一个HeroService新实例
  providers: [HeroService]
})


export class HeroesComponent {

  // 初始化它
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];

  // 选中的英雄
  selectedHero:  Hero;

  // 添加一个构造函数
  // 它在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点。
  constructor(
    private router: Router,
    private heroService: HeroService) { };

  ngOnInit(): void {
    
    this.getHeroes();
  }

  // 获取英雄列表
  getHeroes(): void {
    
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // 点击列表-进入详情
  onSelect(hero: Hero): void {
    this.isShow_hero = false;
    this.selectedHero = hero;
  }
  isShow_hero: boolean = false;
  heroId:any;

  gotoDetail(): void {
    this.isShow_hero = true;
    this.heroId = this.selectedHero.id;
    console.log(this.heroId)
    // this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

