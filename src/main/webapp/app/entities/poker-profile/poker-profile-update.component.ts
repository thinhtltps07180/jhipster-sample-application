import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPokerProfile, PokerProfile } from 'app/shared/model/poker-profile.model';
import { PokerProfileService } from './poker-profile.service';

@Component({
  selector: 'jhi-poker-profile-update',
  templateUrl: './poker-profile-update.component.html',
})
export class PokerProfileUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    ongameId: [],
    nickName: [],
    regDate: [],
    lastDate: [],
    photoPath: [],
    ip: [],
  });

  constructor(protected pokerProfileService: PokerProfileService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ pokerProfile }) => {
      this.updateForm(pokerProfile);
    });
  }

  updateForm(pokerProfile: IPokerProfile): void {
    this.editForm.patchValue({
      id: pokerProfile.id,
      ongameId: pokerProfile.ongameId,
      nickName: pokerProfile.nickName,
      regDate: pokerProfile.regDate,
      lastDate: pokerProfile.lastDate,
      photoPath: pokerProfile.photoPath,
      ip: pokerProfile.ip,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const pokerProfile = this.createFromForm();
    if (pokerProfile.id !== undefined) {
      this.subscribeToSaveResponse(this.pokerProfileService.update(pokerProfile));
    } else {
      this.subscribeToSaveResponse(this.pokerProfileService.create(pokerProfile));
    }
  }

  private createFromForm(): IPokerProfile {
    return {
      ...new PokerProfile(),
      id: this.editForm.get(['id'])!.value,
      ongameId: this.editForm.get(['ongameId'])!.value,
      nickName: this.editForm.get(['nickName'])!.value,
      regDate: this.editForm.get(['regDate'])!.value,
      lastDate: this.editForm.get(['lastDate'])!.value,
      photoPath: this.editForm.get(['photoPath'])!.value,
      ip: this.editForm.get(['ip'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPokerProfile>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
