import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonBackButton,
  IonLabel,
  IonItem} from '@ionic/angular';
import {IonButtons} from '@ionic/angular' ;
import {Personne} from '../../modeles/Personne' ;

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    IonButton,
    IonBackButton,
    IonButtons,
    IonLabel,
    IonItem]
})
export class NewPage implements OnInit 
{

  protected ageDuCapitaine: number ;
  protected lesPersonnes: Array<Personne> ;

  constructor() 
  { 
    this.ageDuCapitaine = 18 ;
    this.lesPersonnes = new Array<Personne>() ;

    this.lesPersonnes.push( new Personne( "Dupond", "Charles")) ;
    this.lesPersonnes.push( new Personne( "Durant", "Pierre")) ;
  }

  anniversaireDuCapitaine()
  {
    this.ageDuCapitaine++ ;
  }

  ajoutePersonne(): void
  {
    this.lesPersonnes.push( new Personne( "Toto", "Titi") ) ;
  }

  ngOnInit() {
  }

}
