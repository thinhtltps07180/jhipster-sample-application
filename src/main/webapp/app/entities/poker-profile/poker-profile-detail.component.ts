import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPokerProfile } from 'app/shared/model/poker-profile.model';

@Component({
  selector: 'jhi-poker-profile-detail',
  templateUrl: './poker-profile-detail.component.html',
})
export class PokerProfileDetailComponent implements OnInit {
  pokerProfile: IPokerProfile | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ pokerProfile }) => (this.pokerProfile = pokerProfile));
  }

  previousState(): void {
    window.history.back();
  }
}
