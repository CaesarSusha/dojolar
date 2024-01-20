import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidunavuComponent } from './sidunavu/sidunavu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidunavuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dojolar';
}
