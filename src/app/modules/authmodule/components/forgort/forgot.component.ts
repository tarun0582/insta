import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routing ,validator} from 'src/app/core/constant';
import { AuthenticationService } from 'src/app/core/services/authentication-services/authentication.service';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
})
export class ForgotComponent {
  routing=routing
  formValidator=validator
  forgotForm:FormGroup
  constructor(private fb:FormBuilder ,private authData :AuthenticationService,private routes:Router){
    this.forgotForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.formValidator.email)])],
    })
  }
  /**
   * 
   */
forgotUser() {
  if (this.forgotForm.valid) {
    console.log(this.forgotForm.value)
    this.authData.resetPasswordInit(this.forgotForm.value.email)
    alert("plz check your email")
    this.routes.navigate([routing.auth.login]);
}
else {
    Object.keys(this.forgotForm.controls).forEach(key => this.forgotForm.controls[key].markAsTouched({ onlySelf: true }))
}
}
signupBtn() {
  this.routes.navigateByUrl(routing.auth.signUp)
}
  title = 'instagram';
}
