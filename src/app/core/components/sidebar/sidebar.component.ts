import {MenuItem} from "../../_models/menu-item.model";
import {Component, OnInit} from "@angular/core";
import {faHospitalUser, faCalendarCheck, faGrip, faUserDoctor, faWallet} from "@fortawesome/free-solid-svg-icons";
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
      name: "Dashboard",
      routerLink: ""
    },
    {
      icon: faHospitalUser,
      name: "Patients",
      routerLink: "patients"
    },
    {
      icon: faUserDoctor,
      name: "Doctors",
      routerLink: "doctors"
    },
    {
      icon: faCalendarCheck,
      name: "Appointments",
      routerLink: "appointments"
    },
    {
      icon: faWallet,
      name: "Bills",
      routerLink: "bills"
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
