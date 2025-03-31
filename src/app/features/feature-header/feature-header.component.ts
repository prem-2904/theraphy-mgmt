import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FeatureMobileMenuComponent } from "../feature-mobile-menu/feature-mobile-menu.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-header',
  imports: [MatSidenavModule, FeatureMobileMenuComponent, RouterLink],
  templateUrl: './feature-header.component.html',
  styleUrl: './feature-header.component.scss'
})
export class FeatureHeaderComponent {

}
