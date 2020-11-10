import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MyAppTestModule } from '../../../test.module';
import { PokerProfileDetailComponent } from 'app/entities/poker-profile/poker-profile-detail.component';
import { PokerProfile } from 'app/shared/model/poker-profile.model';

describe('Component Tests', () => {
  describe('PokerProfile Management Detail Component', () => {
    let comp: PokerProfileDetailComponent;
    let fixture: ComponentFixture<PokerProfileDetailComponent>;
    const route = ({ data: of({ pokerProfile: new PokerProfile(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [MyAppTestModule],
        declarations: [PokerProfileDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(PokerProfileDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PokerProfileDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load pokerProfile on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.pokerProfile).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
