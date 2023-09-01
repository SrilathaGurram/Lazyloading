import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { Cust1Component } from './cust1/cust1.component';

const routes: Routes = [{ path: '', component: CustomersComponent },
{path: '' ,component:Cust1Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
