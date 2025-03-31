import { Component } from '@angular/core';
import { FeatureHeaderComponent } from "../../features/feature-header/feature-header.component";
import { RouterOutlet } from '@angular/router';
import { FeatureFooterComponent } from "../../features/feature-footer/feature-footer.component";

@Component({
  selector: 'app-layout',
  imports: [FeatureHeaderComponent, RouterOutlet, FeatureFooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
