import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { WeatherBoyComponent } from './weather-boy/weather-boy.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LandingPageComponent, WeatherBoyComponent]
})
export class AppComponent {
  title = 'dojolar';
}
