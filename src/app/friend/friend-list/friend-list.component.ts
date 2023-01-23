import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { friendsMock } from '../friends.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css'],
})
export class FriendListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  friends: any;

  ngOnInit(): void {
    this.friends = friendsMock;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: 'Friend',
      },
    });

    dialogRef.afterClosed().subscribe((friend) => {
      if (friend) {
        console.log('friend', friend);
      }
    });
  }
}
