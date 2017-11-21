

import { Injectable } from '@angular/core';

import { Hero } from '../app/hero/hero';

// 引入数据
import { HEROES } from '../mock/mock-heroes';


// 必须先引入装饰器
@Injectable()
export class HeroService {
  // 添加一个名叫getHeros的桩方法。
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // 模拟慢速连接
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  // 添加一个根据id获取英雄的方法
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}