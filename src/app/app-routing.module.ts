import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Page1ComponentComponent } from './page1-component/page1-component.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [

  { path: '', component: HomepageComponent},
  { path: 'page1', component: Page1ComponentComponent},
  { path: 'page2', component: Page2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
  
}
