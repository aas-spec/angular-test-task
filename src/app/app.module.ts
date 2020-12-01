import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShowCaseComponent} from './show-case/show-case.component';
import {ShowCaseCardComponent} from './show-case/show-case-card/show-case-card.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ShowCaseFilterComponent} from './show-case/show-case-filter/show-case-filter.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowCaseComponent,
    ShowCaseCardComponent,
    ShowCaseFilterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
