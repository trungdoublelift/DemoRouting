import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'store', loadChildren: () => import('./module/store/store.module').then(m => m.StoreModule) },
  { path:'home', component: HomeComponent},
  { path:'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
