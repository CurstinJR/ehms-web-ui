import {Component, OnInit} from "@angular/core";
import {PatientsService} from "../services/patients.service";
import {PatientModel} from "../models/patient.model";
import {AppIcon} from "../../core/_models/app-icon.model";
import {faEye, faPenToSquare} from "@fortawesome/free-solid-svg-icons";

type PatientTableConfig = { header: string }[];

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients$: PatientModel[];
  patientTableConfig: PatientTableConfig = [
    {
      header: "#"
    }
  ]
  editIcon: AppIcon = {
    icon: faPenToSquare,
    size: "2x"
  }
  viewIcon: AppIcon = {
    icon: faEye,
    size: "2x"
  }

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
