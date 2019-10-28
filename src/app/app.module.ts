import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DealPageComponent } from './deal-page/deal-page.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { CardComponent } from './deal-page/main-area/card/card.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { WalletComponent } from './deal-page/wallet/wallet.component';
import { MainAreaComponent } from './deal-page/main-area/main-area.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DealPageComponent,
    CardComponent,
    WalletComponent,
    MainAreaComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzStatisticModule,
    NzButtonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
