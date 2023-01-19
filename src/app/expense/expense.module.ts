import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ExpenseListComponent],
  imports: [CommonModule, ExpenseRoutingModule, MaterialModule],
  exports: [],
})
export class ExpenseModule {}
