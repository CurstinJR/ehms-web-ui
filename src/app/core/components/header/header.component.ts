import {Component, OnInit} from "@angular/core";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {AppIcon} from "../../_models/app-icon.model";
import {AuthenticationService} from "../../_services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: AppIcon = {
    icon: faCircleUser,
    size: "3x"
  }

  constructor(private authenticationService: AuthenticationService) {
  }

  get isUserLoggedIn() {
    return this.authenticationService.currentUserValue;
  }


  ngOnInit(): void {
  }

  public onLogout() {
    this.authenticationService.logout();
  }

}
