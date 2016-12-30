import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Movie } from '../core/movie';

@Component({
    selector: 'movies-list',
    templateUrl: 'moviest-list.component.html'
})

export class MoviesList implements OnInit {
    movies: Movie[];
    pageTitle: string;

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('../data/movies.json')
            .map((res: Response) => res.json()) // Map will change your response ot json()
            .subscribe(movies => {
                this.movies = movies;
            });
    }
}
