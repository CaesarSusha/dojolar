import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidunavu',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatListModule],
  templateUrl: './sidunavu.component.html',
  styleUrl: './sidunavu.component.scss',
})
export class SidunavuComponent {}
