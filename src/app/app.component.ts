


import { Component } from '@angular/core';

// AppComponent现在加上了路由器，并能显示路由到的视图了。
@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
}