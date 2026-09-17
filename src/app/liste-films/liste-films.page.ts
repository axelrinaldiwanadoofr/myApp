import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular';
import { Film } from '../../modeles/Film' ;
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.page.html',
  styleUrls: ['./liste-films.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem]
})
export class ListeFilmsPage implements OnInit 
{
  protected lesFilms: Array<Film> ;
  protected filmService: FilmService ;

  constructor( filmService: FilmService ) 
  { 
    this.filmService = filmService ;

    // On crée le tableau et on copie sa référence dans l'attribut lesFilms
    this.lesFilms = new Array<Film>() ; 
  }

  ngOnInit() 
  {
    // Abonnement à la méthode getTousLesFilms du service FilmService
    this.filmService.getTousLesFilms().subscribe( (lesFilms)=>
    {
      this.lesFilms = lesFilms ;
    }) ;
  }

}
