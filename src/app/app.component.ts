import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PruebaModule } from './prueba/prueba.module';
import {MatToolbarModule} from '@angular/material/toolbar'; 
@Component({
  standalone:true,
  imports: [HomePageComponent,AboutComponent,PruebaModule,MatToolbarModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular14-breaking-bad-sa';
}
