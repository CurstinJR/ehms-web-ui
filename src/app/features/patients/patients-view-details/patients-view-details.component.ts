import {Component, OnInit} from '@angular/core';
import {Vital} from "../../models/vital.model";
import {AppIcon} from "../../../core/_models/app-icon.model";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

type VitalConfig = { icon: AppIcon, name: string, stat: number | string };

@Component({
  selector: 'app-patients-add-edit',
  templateUrl: './patients-view-details.component.html',
  styleUrls: ['./patients-view-details.component.css']
})
export class PatientsViewDetailsComponent implements OnInit {

  public patientVitals: Vital = {
    weight: 75.5,
    height: 175.5,
    bloodPressure: "Normal",
    temperature: 37.5,
  };

  private iconSize: SizeProp = "1x";

  vitalConfigs: VitalConfig[] = [
    {
      icon: {
        icon: faEye,
        size: this.iconSize
      },
      name: "Weight",
      stat: this.patientVitals.weight
    },
    {
      icon: {
        icon: faEye,
        size: this.iconSize
      },
      name: "Height",
      stat: this.patientVitals.height
    },
    {
      icon: {
        icon: faEye,
        size: this.iconSize
      },
      name: "Blood Pressure",
      stat: this.patientVitals.bloodPressure
    },
    {
      icon: {
        icon: faEye,
        size: this.iconSize
      },
      name: "Temperature",
      stat: this.patientVitals.temperature
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
