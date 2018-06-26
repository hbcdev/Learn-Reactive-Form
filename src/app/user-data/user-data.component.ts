import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { DataModel } from '../data-model';
import { DataService } from '../data.service';

import * as $ from 'jquery';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDAtaComponent implements OnInit {
  public contacts: Array<object> = [];
  dataModel: DataModel;
  userForm: FormGroup;
  fundcode = new FormControl();
  showDataModel: any;
  Modaltitle: any;
  btnChk: any = true;

  constructor(private fb: FormBuilder, private api: DataService) {
    this.Modaltitle = "Edit ......";
    this.getData();
    this.createFrom();


  }

  //  สร้าง Form 
  createFrom() {
    this.userForm = this.fb.group({
      $id: '',
      fund_id: [99, Validators.required],
      fundcode: ['', Validators.required],
      name: ['', Validators.required],
      thainame: ['', Validators.required],
      date_on: ['', Validators.required],
      date_off: '',
      exclusion: '',
      respond: ['', Validators.required],
      l_user: '',
      l_update: '',
      wt: '',
      wt_start: '',
      wt_end: '',
      taxid: '',
      fee: '',
      address: ['', Validators.required],
      phone: ['', Validators.required],
      admin: '',
      auditor: '',
      email: '',
      icd_group: '',
      queue_no: ['', Validators.required],
      timestamp_column: '',
      edc: ['', Validators.required],
      fundname: '',
      infotext: '',
      language: ['', Validators.required],
    });
  }

  // ดึงข้อมูลจาก API
  getData() {
    this.api.getData('fund').subscribe((data: DataModel) => {
      this.dataModel = data;
    });
  }


  getDataByFund(fund_id: any, status: any) {
    if (status == 'edit') {
      this.api.getData('fund/' + fund_id).subscribe((data: any) => {
        this.userForm.setValue(data);
        this.Modaltitle = "Edit ......";
        this.btnChk = true;

      });
    } else {
      this.createFrom();
      //  this.userForm.get('fund_id').value = 55;
      this.Modaltitle = "Add ......";
      this.btnChk = false;
    }

  }


  subFC() {

    if (this.btnChk) {
      this.api.editData('fund/' + this.userForm.get('fund_id').value, this.userForm.value).subscribe((data: any) => {
        console.log('Edit response : ', data);
      });
    } else {
      this.api.addData('fund', this.userForm.value).subscribe((data: any) => {
        console.log('Edit response : ', data);
      });
    }

  }


  delfundcode(fund_id: any) {
    console.log('del response : ', fund_id);
    this.api.delData('fund/' + fund_id).subscribe((data: any) => {
      console.log('Edit response : ', data);
    });
  }


  ngOnInit() {
  }

}
