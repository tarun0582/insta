import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication-services/authentication.service';
import { routing  } from 'src/app/core/constant';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
report() {
  this.route.navigateByUrl('/home/report')
}
  routing :{}=routing
  constructor(private authData: AuthenticationService, private route: Router) {}
  viewReels = () => this.route.navigateByUrl(routing.home.view_reels_url);
  createReals = () => this.route.navigateByUrl(routing.home.create_reals_url);
  home = () => this.route.navigateByUrl(routing.home.home_post_url);
  logOut = () => {
    this.authData.logout();
    this.route.navigateByUrl(routing.home.login_url);
  }
   nav_link=[
    { label: 'Logout', action: this.logOut },
    { label: 'Home Post', action: this.home },
    { label: 'Create Real', action: this.createReals },
    { label: 'View Real', action: this.viewReels }]
}