import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InstaPostComponent } from './components/instapost/instapost.component';
import { HeaderComponent } from './components/header/header.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HomePostComponent } from './components/homepost/homepost.componnet';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ViewRealsComponent } from './components/view-reals/viewReals.component';
import { CreateRealsComponent } from './components/create-reals/createReals.component';
import { ReportComponent } from './components/view-reported-post/report.component';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [HomeComponent,InstaPostComponent,HeaderComponent ,HomePostComponent,ViewRealsComponent,CreateRealsComponent,ReportComponent],
  imports: [
  CommonModule,
  ReactiveFormsModule,
   HomeRoutingModule,
   AngularFireModule.initializeApp( environment.firebase),
   AngularFireStorageModule, 
   PickerModule,
  ],
  exports:[
   
  ]
  
})
export class HomeModule { }
