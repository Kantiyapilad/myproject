import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ImageModule} from 'primeng/image';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MenubarModule} from 'primeng/menubar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenutoolbarComponent } from './menutoolbar/menutoolbar.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    MenutoolbarComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ImageModule,
    FontAwesomeModule,
    MenubarModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
