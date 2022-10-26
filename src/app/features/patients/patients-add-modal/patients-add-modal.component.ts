import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {PatientsService} from "../../services/patients.service";
import {PatientModel} from "../../models/patient.model";
import {VitalModel} from "../../models/vital.model";

@Component({
  selector: 'app-patient-add-modal',
  templateUrl: './patients-add-modal.component.html',
  styleUrls: ['./patients-add-modal.component.css']
})
export class PatientsAddModalComponent implements OnInit {

  patient: PatientModel = new PatientModel();
  addPatientForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    vitals: this.formBuilder.group({
      weight: ['', Validators.required],
      height: ['', Validators.required],
      bloodPressure: ['', Validators.required],
      temperature: ['', Validators.required],
    })
  });
  patients: PatientModel[];

  constructor(private formBuilder: FormBuilder,
              private patientsService: PatientsService) {
    this.patient.vitals = new VitalModel();
  }

  ngOnInit(): void {
  }

  buildPatient(): PatientModel {
    this.patient.firstName = this.addPatientForm.value.firstName!;
    this.patient.lastName = this.addPatientForm.value.lastName!;
    this.patient.vitals.weight = +this.addPatientForm.value.vitals?.weight!;
    this.patient.vitals.height = +this.addPatientForm.value.vitals?.height!;
    this.patient.vitals.bloodPressure = this.addPatientForm.value.vitals?.bloodPressure!;
    this.patient.vitals.temperature = +this.addPatientForm.value.vitals?.temperature!;
    return this.patient;
  }

  getAll() {
    return this.patientsService.getAll().subscribe(data => this.patients = data);
  }

  onSubmit() {
    this.patientsService.add(this.buildPatient()).subscribe({
      error: (err: any) => console.log(err),
      complete: () => {
      }
    });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
