import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesList } from './movies-list/movies-list.component';
import { MovieShort } from './movie-short/movie-short.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        MoviesList,
        MovieShort
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
