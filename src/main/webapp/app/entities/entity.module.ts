import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'poker-profile',
        loadChildren: () => import('./poker-profile/poker-profile.module').then(m => m.MyAppPokerProfileModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class MyAppEntityModule {}
