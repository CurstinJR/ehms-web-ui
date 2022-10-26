import {Component, OnInit} from '@angular/core';
import {AppIcon} from "../../../core/_models/app-icon.model";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {PatientsService} from "../../services/patients.service";
import {PatientModel} from "../../models/patient.model";

@Component({
  selector: 'app-patient-view-details',
  templateUrl: './patients-view-details.component.html',
  styleUrls: ['./patients-view-details.component.css']
})
export class PatientsViewDetailsComponent implements OnInit {

  patient: PatientModel;
  icon: AppIcon = {
    icon: faEye,
    size: "1x"
  }

  constructor(private activatedRoute: ActivatedRoute,
              private patientsService: PatientsService) {
  }

  ngOnInit(): void {
    this.onViewGetPatient();
  }

  onViewGetPatient() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.patientsService.getById(Number(id)).subscribe(data => this.patient = data);
    });
  }
}
