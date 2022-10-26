import {MenuItem} from "../../_models/menu-item.model";
import {Component, OnInit} from "@angular/core";
import {
  faCalendarCheck,
  faGrip,
  faHospitalUser,
  faImagePortrait,
  faUserDoctor,
  faWallet
} from "@fortawesome/free-solid-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  iconSize: SizeProp = "2x";
  menuItems: MenuItem[] = [
    {
      icon: faGrip,
      name: "Dashboard"
    },
    {
      icon: faHospitalUser,
      name: "Patients"
    },
    {
      icon: faUserDoctor,
      name: "Employees"
    },
    {
      icon: faCalendarCheck,
      name: "Appointments"
    },
    {
      icon: faWallet,
      name: "Bills"
    },
    {
      icon: faImagePortrait,
      name: "Roles"
    },
    {
      icon: faImagePortrait,
      name: "Prescription"
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
