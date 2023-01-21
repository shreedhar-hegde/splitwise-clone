import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { expensesMock } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  expenses: any;

  ngOnInit(): void {
    this.expenses = expensesMock;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        itemTitle: 'Expense',
      },
    });

    dialogRef.afterClosed().subscribe((expense) => {
      if (expense) {
        console.log('expense', expense);
      }
    });
  }
}
