import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.page.html',
  styleUrls: ['./liste-films.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem]
})
export class ListeFilmsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
