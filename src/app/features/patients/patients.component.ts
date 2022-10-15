import {Component, OnInit} from "@angular/core";
import {PatientsService} from "../services/patients.service";
import {PatientModel} from "../models/patient.model";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients$: PatientModel[];

  constructor(private patientsService: PatientsService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.patientsService
      .getAll()
      .subscribe(data => {
        this.patients$ = data;
      });
  }
}
