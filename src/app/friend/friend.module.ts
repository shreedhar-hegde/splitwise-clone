import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ExpenseRoutingModule } from '../expense/expense-routing.module';
import { FriendRoutingModule } from './friend-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [FriendListComponent],
  imports: [CommonModule, FriendRoutingModule, MaterialModule],
})
export class FriendModule {}
