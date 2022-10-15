import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
@Component({
  selector: 'app-personaje-card',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.css']
})
export class PersonajeCardComponent implements OnInit {
@Input()personaje:any
  constructor() { }

  ngOnInit(): void {
  }

}
