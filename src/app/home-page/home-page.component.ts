import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingBadService } from '../breaking-bad.service';
import { AboutComponent } from '../about/about.component';
import { PersonajeCardComponent } from '../personaje-card/personaje-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,AboutComponent,PersonajeCardComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  personajes:any[]=[]
texto:string=''
  constructor(public breakingBadService:BreakingBadService) { }

  ngOnInit(): void {

this.texto=this.breakingBadService.prueba
this.breakingBadService.getPersonajes().subscribe((data:any)=>{
  console.log(data)
  this.personajes=data;
})
  }

}
