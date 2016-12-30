import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../core/movie';

@Component({
    selector: '[movie-short]',
    templateUrl: 'movie-short.component.html',
    styleUrls: ['movie-short.css']
})

export class MovieShort implements OnInit {
    @Input() movie: Movie;

    constructor() { }

    ngOnInit() {}
}
