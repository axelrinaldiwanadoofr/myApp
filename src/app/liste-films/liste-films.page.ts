import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular';
import { Film } from '../../modeles/Film' ;

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.page.html',
  styleUrls: ['./liste-films.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem]
})
export class ListeFilmsPage implements OnInit 
{
  protected lesFilms: Array<Film> ;

  constructor() 
  { 
    // On crée le tableau et on copie sa référence dans l'attribut lesFilms
    this.lesFilms = new Array<Film>() ; 

    // On ajoute quelques films dans le tableau
    this.lesFilms.push( new Film( 1, "Star Wars", 1976 ) ) ;
    this.lesFilms.push( new Film( 2, "Avatar", 2006 ) ) ;
    this.lesFilms.push( new Film( 3, "La folie des grandeurs", 1966 ) ) ;
  }

  ngOnInit() 
  {
  }

}
