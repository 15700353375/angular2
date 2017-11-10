

import { Component, Input} from '@angular/core';
// 引入公共类
import { Hero } from './hero';
 // 创建一个Hero类

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
   // styleUrls: ['./hero-detail.component.css']
})




export class HeroDetailComponent {
  // 通过在hero属性前面加上@Input装饰器，来表明它是一个输入属性。
  @Input() hero: Hero;
}
