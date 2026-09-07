import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonBackButton} from '@ionic/angular';
import {IonButtons} from '@ionic/angular' ;

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
    IonButtons]
})
export class NewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
