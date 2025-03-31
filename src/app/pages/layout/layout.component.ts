import { Component } from '@angular/core';
import { FeatureHeaderComponent } from "../../features/feature-header/feature-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [FeatureHeaderComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
