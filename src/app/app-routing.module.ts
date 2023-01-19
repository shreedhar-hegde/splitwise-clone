import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'expenses',
    loadChildren: () =>
      import('./expense/expense.module').then((m) => m.ExpenseModule),
  },
  {
    path: 'friends',
    loadChildren: () =>
      import('./friend/friend.module').then((m) => m.FriendModule),
  },
  {
    path: 'groups',
    loadChildren: () =>
      import('./group/group.module').then((m) => m.GroupModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
