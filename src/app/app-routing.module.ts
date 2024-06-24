import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HmsLoginPageComponent } from './components/hms-login-page/hms-login-page.component';

const routes: Routes = [
  {path:"",component:HmsLoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
