import { Component, ElementRef, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatSidenavModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly _router = inject(Router);

  clickEventTriggered(snav: any) {
    console.log("clickEventTriggered");
  }

  viewTherayDetails(therapyId: string) {
    this._router.navigate(['/therapy', therapyId]);
  };
}
