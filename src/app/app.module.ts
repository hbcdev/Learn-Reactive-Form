import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

// import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptionComponent } from './modal-option/modal-option.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyService } from './my-service';
import { FundComponentComponent } from './fund-component/fund-component.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    ModalOptionComponent,
    FundComponentComponent
  ],
  entryComponents: [FundComponentComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyService],
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {

    const element = createCustomElement(FundComponentComponent, { injector: this.injector });
    customElements.define('app-fund-component', element);
  }

}
