import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPokerProfile } from 'app/shared/model/poker-profile.model';
import { PokerProfileService } from './poker-profile.service';
import { PokerProfileDeleteDialogComponent } from './poker-profile-delete-dialog.component';

@Component({
  selector: 'jhi-poker-profile',
  templateUrl: './poker-profile.component.html',
})
export class PokerProfileComponent implements OnInit, OnDestroy {
  pokerProfiles?: IPokerProfile[];
  eventSubscriber?: Subscription;

  constructor(
    protected pokerProfileService: PokerProfileService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.pokerProfileService.query().subscribe((res: HttpResponse<IPokerProfile[]>) => (this.pokerProfiles = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInPokerProfiles();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IPokerProfile): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInPokerProfiles(): void {
    this.eventSubscriber = this.eventManager.subscribe('pokerProfileListModification', () => this.loadAll());
  }

  delete(pokerProfile: IPokerProfile): void {
    const modalRef = this.modalService.open(PokerProfileDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.pokerProfile = pokerProfile;
  }
}
