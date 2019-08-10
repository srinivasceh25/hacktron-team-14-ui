import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
