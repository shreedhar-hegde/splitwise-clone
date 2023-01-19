import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [GroupListComponent],
  imports: [CommonModule, GroupRoutingModule, MaterialModule],
})
export class GroupModule {}
