import {Component, OnInit} from '@angular/core';

type Feature = { name: string };

@Component({
  selector: 'app-dashboard',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  features: Feature[] = [
    {
      name: "Patients"
    },
    {
      name: "Employees"
    },
    {
      name: "Appointments"
    },
    {
      name: "Bills"
    },
    {
      name: "Roles"
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
