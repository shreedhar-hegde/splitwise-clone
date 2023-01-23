import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  groupName?: string;
  friends?: { name: string; _id: string }[];
  expenseName?: string;
  amount?: number;
  friendName?: string;
  mode: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  title!: string;
  groupName?: string;
  friends?: { name: string; _id: string }[];
  expenseName?: string;
  amount?: number;
  friendName?: string;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.groupName = this.data.groupName!;
    this.friends = this.data.friends!;
    this.amount = this.data.amount!;
    this.friendName = this.data.friendName;

    if (this.data.mode === 'edit') {
      this.dataForm.get('groupNameFormControl')?.setValue(this.data.groupName);
      this.dataForm.get('friendsFromControl')?.setValue(this.data.friends);
    }
  }

  dataForm = this.fb.group({
    groupNameFormControl: new FormControl(''),
    friendsFromControl: new FormControl(''),
  });

  onNoClick(): void {
    this.dialogRef.close();
  }
}
