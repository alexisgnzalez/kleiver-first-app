import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPage } from './pages/user/user.page';
import { WelcomePage } from './pages/welcome/welcome.page';

const routes: Routes = [
  { path: '', component: WelcomePage },
  { path: 'user', component: UserPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
