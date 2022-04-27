import { ItemDetailsComponent } from './../../component/item-details/item-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';

const routes: Routes = [{ path: '', component: StoreComponent },
  {path: 'item-details', component:ItemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
