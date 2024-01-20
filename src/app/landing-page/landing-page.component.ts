import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButton, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
