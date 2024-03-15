import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AlertComponent } from './components/aircrafts/alert/alert.component';

const routes: Routes = [
  {
    path: 'aircrafts',
    component: AircraftsComponent,
  },
  { path: 'alert', component: AlertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
