import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdvertListComponent} from './pages/adverts/advert-list/advert-list.component';
import {AdvertAddComponent} from './pages/adverts/advert-add/advert-add.component';
import {HomeComponent} from './pages/home/home.component';
import {AdvertViewComponent} from './pages/adverts/advert-view/advert-view.component';
import {AdminSectionComponent} from './pages/admin-section/admin-section.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';

const routes: Routes = [
  {path: 'admin', component: AdminSectionComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '', component: HomeComponent},
  {path: 'c/:id', component: AdvertListComponent},
  {path: 'add', component: AdvertAddComponent},
  {path: ':id', component: AdvertViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
