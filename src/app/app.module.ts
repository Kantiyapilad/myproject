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
@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImageModule,
    FontAwesomeModule,
    MenubarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
