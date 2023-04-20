import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotComponent } from './components/forgort/forgot.component';
import { SignUpComponent } from './components/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthenticationService } from 'src/app/core/services/authentication-services/authentication.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [LoginComponent,ForgotComponent,SignUpComponent,MainComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    FirestoreModule,
    SweetAlert2Module ,
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [AuthenticationService],
  exports:[
  ] 
})
export class AuthModule { }