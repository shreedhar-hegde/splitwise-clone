import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { groupMock } from '../group.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css'],
})
export class GroupListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  groups: any;

  ngOnInit(): void {
    this.groups = groupMock;
  }

  openDialog(mode:string, groupName?:string, friends?:string[]) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: 'Group',
        mode,
        groupName,
        friends
      },
    });

    dialogRef.afterClosed().subscribe((group) => {
      if (group) {
        console.log('group', group);
      }
    });
  }
}
