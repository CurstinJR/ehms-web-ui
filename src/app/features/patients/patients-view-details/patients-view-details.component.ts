import {Component, OnInit} from '@angular/core';
import {AppIcon} from "../../../core/_models/app-icon.model";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {VitalModel} from "../../models/vital.model";
import {VitalsService} from "../../services/vitals.service";
import {PatientModel} from "../../models/patient.model";

@Component({
  selector: 'app-patients-view-details',
  templateUrl: './patients-view-details.component.html',
  styleUrls: ['./patients-view-details.component.css']
})
export class PatientsViewDetailsComponent implements OnInit {

  vitals: VitalModel = new VitalModel();
  icon: AppIcon = {
    icon: faEye,
    size: "1x"
  }

  constructor(private vitalsService: VitalsService,
              private activatedRoute: ActivatedRoute) {
    this.vitals = new VitalModel();
    this.vitals.patient = new PatientModel();
  }

  ngOnInit(): void {
    this.onViewGetPatientVitals();
  }

  onViewGetPatientVitals() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.vitalsService.getVitalsByPatientId(Number(id)).subscribe(data => this.vitals = data);
    });
  }
}
