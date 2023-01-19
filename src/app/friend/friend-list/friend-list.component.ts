import { Component, OnInit } from '@angular/core';
import { friendsMock } from '../friends.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css'],
})
export class FriendListComponent implements OnInit {
  constructor() {}

  friends: any;

  ngOnInit(): void {
    this.friends = friendsMock;
  }
}
