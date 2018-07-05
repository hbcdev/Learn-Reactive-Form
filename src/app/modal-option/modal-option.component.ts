import { Component, ViewEncapsulation, Input, OnChanges } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { appModel, AppModel } from '../app-model';
import { MyService } from '../my-service';
import { NgbModal, } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-option',
  templateUrl: './modal-option.component.html',
  styleUrls: ['./modal-option.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalOptionComponent implements OnChanges {

  @Input() data: any;


  appModel: AppModel;
  userForm: FormGroup;
  fundcode = new FormControl();
  showappModel: any;
  Modaltitle: any;
  btnChk: any = true;
  selectData: any;

  closeResult: string;

  constructor(private modalService: NgbModal, private api: MyService) { }

  ngOnChanges() {
    console.log('modal : ', this.data);
    // this.modalService.open("Hi");
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
