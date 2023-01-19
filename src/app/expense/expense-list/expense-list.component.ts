import { Component, OnInit } from '@angular/core';
import { expensesMock } from '../expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  constructor() {}

  expenses: any;

  ngOnInit(): void {
    this.expenses = expensesMock;
  }
}
