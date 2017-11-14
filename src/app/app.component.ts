

import { Component } from '@angular/core';
// 现在，有两个组件需要Hero类的引用，所以
import { Hero } from './hero/hero';
// 导入服务
import { HeroService } from '../service/hero.service';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})


export class AppComponent {
  title = 'Tour of Heroes';
  // 初始化它
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];
  constructor(private heroService: HeroService) {

   }
  getHeroes(): void {

    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // 点击列表-进入详情
  selectedHero:  Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

