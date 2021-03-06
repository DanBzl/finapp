import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CustomerAddComponent} from './customer-add/customer-add.component';
import{CustomerListComponent} from './customer-list/customer-list.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'add',
    component: CustomerAddComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
