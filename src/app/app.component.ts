

import { Component } from '@angular/core';
// 现在，有两个组件需要Hero类的引用，所以
import { Hero } from './hero/hero';
 
 // 创建一个Hero类
// export class Hero {
//   id: number;
//   name: string;
// }
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Tour of Heroes';
  // 初始化它
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // 在AppComponent上创建一个公共属性，用来暴露这些英雄，以供绑定
  heroes = HEROES;

// 把hero属性替换成selectedHero属性,不需要初始化值
  selectedHero: Hero;

  // 添加一个onSelect方法，用于将用户点击的英雄赋给selectedHero属性
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

// 创建一个由十位英雄组成的数组。
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];