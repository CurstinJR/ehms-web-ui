import {Component, OnInit} from "@angular/core";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: { icon: IconDefinition, size: SizeProp } = {
    icon: faCircleUser,
    size: "3x"
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
