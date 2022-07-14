import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
{path:"", redirectTo:"home",pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"nav-bar", component: NavBarComponent},
  {path:"portfolio", component:PortfolioComponent},
  {path:"about", component:AboutComponent},
  {path:"information",component:InformationComponent},
  {path:"contact-me",component:ContactMeComponent},
  {path:"**", component:Error404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
