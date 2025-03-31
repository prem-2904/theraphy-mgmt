import { Component } from '@angular/core';
import { FeatureTherapistProfileComponent } from "../../../features/feature-therapist-profile/feature-therapist-profile.component";
import { httpResource } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ITherapistResponse } from '../../../utils/models/therapist.model';

@Component({
  selector: 'app-therapists',
  imports: [FeatureTherapistProfileComponent],
  templateUrl: './therapists.component.html',
  styleUrl: './therapists.component.scss'
})
export class TherapistsComponent {

  therapists = httpResource<ITherapistResponse>(() => ({
    url: 'https://randomuser.me/api',
    params: { results: 15 },
    reportProgress: true,
    method: 'GET',
  }));
}
