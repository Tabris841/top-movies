import { Component } from '@angular/core';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Top 10 iMDB';
    }
}
