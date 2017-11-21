

import { Component } from '@angular/core';
// 路由注入
import { Router } from '@angular/router';
// 现在，有两个组件需要Hero类的引用，所以
import { Hero } from './hero/hero';
// 导入服务
import { HeroService } from '../service/hero.service';
 
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
  // 注册一个HeroService新实例
  providers: [HeroService]
})


export class HeroesComponent {
  title = 'Tour of Heroes';
  // 初始化它
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];
  // 添加一个构造函数
  // 它在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点。
  constructor(
    private router: Router,
    private heroService: HeroService) { };

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // 点击列表-进入详情
  selectedHero:  Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

