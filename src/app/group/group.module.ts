import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';
import { MaterialModule } from '../material/material.module';
import { ModalComponent } from '../components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [GroupListComponent],
  imports: [CommonModule, GroupRoutingModule, MaterialModule, MatDialogModule],
})
export class GroupModule {}
