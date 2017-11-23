import { Component, OnInit } from '@angular/core';
// 现在，有两个组件需要Hero类的引用，所以
import { Hero } from './hero/hero';
// 导入服务
import { HeroService } from '../service/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    // 注册一个HeroService新实例
    providers: [HeroService]
})

export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { };
    
    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}
