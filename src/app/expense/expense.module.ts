import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { MaterialModule } from '../material/material.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ExpenseListComponent],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    MaterialModule,
    MatDialogModule,
  ],
  exports: [],
})
export class ExpenseModule {}
