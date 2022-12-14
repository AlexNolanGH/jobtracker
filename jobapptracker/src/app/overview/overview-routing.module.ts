import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3PageOverview } from './overview.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3PageOverview,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
