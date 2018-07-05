import { Component, ViewEncapsulation } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, } from '@ng-bootstrap/ng-bootstrap';
import { appModel, AppModel } from '../app-model';
import { MyService } from '../my-service';
@Component({
  selector: 'app-fund-component',
  templateUrl: './fund-component.component.html',
  styleUrls: ['./fund-component.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class FundComponentComponent {

  public contacts: Array<object> = [];
  appModel: AppModel;
  userForm: FormGroup;
  fundcode = new FormControl();
  showappModel: any;
  Modaltitle: any;
  btnChk: any = true;
  selectData: any;
  // @Output() click = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private api: MyService, private modalService: NgbModal) {
    this.Modaltitle = "Edit ......";

    // get data from api
    this.getData();

    // create form Reactive
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
    this.api.getData('fund').subscribe((data: AppModel) => {
      this.appModel = data;
    });
  }


  // Form Add new item AND Edit fundcode
  getDataByFund(fund_id: any, status: any, content) {
    console.log("fund_id : " + fund_id + "   status : " + status);
    if (status == 'edit') {
      this.api.getData('fund/' + fund_id).subscribe((data: any) => {
        this.userForm.setValue(data);
        this.Modaltitle = "Edit Fundcode";
        this.btnChk = true;
      });
    } else {
      this.createFrom();
      //  this.userForm.get('fund_id').value = 55;
      this.Modaltitle = "Add Fundcode";
      this.btnChk = false;
    }
    this.modalService.open(content, { size: 'lg' });


  }


  // sent request Edit Or New item To API
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


  // delete fundcode
  delfundcode(fund_id: any) {
    this.api.delData('fund/' + fund_id).subscribe((data: any) => {
      console.log('Edit response : ', data);
    });
  }


  // test send data to modal cpmponent
  selectFund(data: any) {
    console.log("select fund  : ", data);
    this.selectData = data

  }

  // With angular Element retrun data to Other Project
  // selectFund(data: any) {
  //   this.click.emit({ "fundcode": data.fundcode, "thainame": data.thainame });
  // }


}
