import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WeatherBoyComponent } from './weather-boy/weather-boy.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'weather', component: WeatherBoyComponent},
];
