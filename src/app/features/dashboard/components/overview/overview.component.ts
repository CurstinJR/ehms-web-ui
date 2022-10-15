import {Component, OnInit} from '@angular/core';

type Feature = { name: string };

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  features: Feature[] = [
    {
      name: "Patients"
    },
    {
      name: "Doctors"
    },
    {
      name: "Appointments"
    },
    {
      name: "Bills"
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
