import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './pages/blocks/navbar/navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AdvertListComponent} from './pages/adverts/advert-list/advert-list.component';
import {AdvertAddComponent} from './pages/adverts/advert-add/advert-add.component';
import {MdlCurrencyPipe} from './pipes/mdl-currency.pipe';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AdvertViewComponent } from './pages/adverts/advert-view/advert-view.component';
import { DateTimePipe } from './pipes/date-time.pipe';
import { AdminSectionComponent } from './pages/admin-section/admin-section.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdvertListComponent,
    AdvertAddComponent,
    MdlCurrencyPipe,
    HomeComponent,
    AdvertViewComponent,
    DateTimePipe,
    AdminSectionComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
