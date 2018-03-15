
import { Component } from '@angular/core';
// 路由注入
import { RouterModule }   from '@angular/router';

// AppComponent现在加上了路由器，并能显示路由到的视图了。
@Component({
    selector: 'my-app-nav',
    templateUrl: 'nav.component.html',
    styleUrls: ['nav.component.css'],
})
export class NavComponent {
    // title = 'Tour of Heroes';
}