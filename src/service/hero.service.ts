

import { Injectable } from '@angular/core';

import { Hero } from '../app/hero/hero';

// 引入数据
import { HEROES } from '../mock/mock-heroes';


// 必须先引入装饰器
@Injectable()
export class HeroService {
  // 添加一个名叫getHeros的桩方法。
  getHeroes(): Hero[] {
    return HEROES;
  }

  // getHeroes(): Promise<Hero[]> {
  //    return Promise.resolve(HEROES);
  //  }
}