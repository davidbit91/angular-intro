import { Ex02Component } from './ex02/ex02.component';
import { Ex01Component } from './ex01/ex01.component';
import { HomeComponent } from './commons/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { Ex03Component } from './ex03/ex03.component';
import { Ex02DetailComponent } from './ex02-detail/ex02-detail.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent },
  {path:'', redirectTo: '/ex01', pathMatch:'full'},
  {path: 'ex01' , component: Ex01Component},
  {path: 'ex02' , component: Ex02Component,
  children:[
    {path:':id', component: Ex02DetailComponent}]},
  {path: 'ex03' , component: Ex03Component},
  {path:'**', component:NotfoundComponent}]

@NgModule({
  declarations: [

   ],
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
