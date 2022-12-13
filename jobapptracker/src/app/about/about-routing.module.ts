import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2PageAbout } from './about.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2PageAbout,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
