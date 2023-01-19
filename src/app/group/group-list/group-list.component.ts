import { Component, OnInit } from '@angular/core';
import { groupMock } from '../group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css'],
})
export class GroupListComponent implements OnInit {
  constructor() {}

  groups: any;

  ngOnInit(): void {
    this.groups = groupMock;
  }
}
