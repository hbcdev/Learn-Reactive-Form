import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { DataModel } from '../data-model';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDAtaComponent implements OnInit {
  public contacts: Array<object> = [];
  dataModel: DataModel;
  userForm: FormGroup;



  constructor(private fb: FormBuilder, private api: DataService) {
    this.getData();
    this.createFrom();
  }


  //  สร้าง Form 
  createFrom() {
    this.userForm = this.fb.group({
      name: new FormControl()
    });
  }

  // ดึงข้อมูลจาก API
  getData() {
    this.api.getData('fund').subscribe((data: DataModel) => {
      this.dataModel = data;
    });
  }
  ngOnInit() {
  }

}
