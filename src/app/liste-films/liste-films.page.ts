import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular';
import { Film } from '../../modeles/Film' ;
import { FilmService } from '../../services/film.service';
import {Observable} from "rxjs" ;

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.page.html',
  styleUrls: ['./liste-films.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem]
})
export class ListeFilmsPage implements OnInit 
{
  protected lesFilms: Observable<Film[]> | null = null ;
  protected filmService: FilmService ;

  constructor( filmService: FilmService ) 
  { 
    this.filmService = filmService ;
  }

  ngOnInit() 
  {
    this.lesFilms = this.filmService.getTousLesFilms() ;
  }

}
