import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ITherapist } from '../../utils/models/therapist.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-therapist-profile',
  imports: [RouterLink],
  templateUrl: './feature-therapist-profile.component.html',
  styleUrl: './feature-therapist-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureTherapistProfileComponent {
  therapistProfile = input.required<ITherapist>();

  ngOnInit() {
    console.log("profile-details", this.therapistProfile());
  }
}
