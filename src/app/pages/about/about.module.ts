import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './normal/about.page';
import { SpecialPage } from './special/special.page';



@NgModule({
  declarations: [
    AboutPage,
    SpecialPage
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
