import {Component, OnInit} from "@angular/core";
import {PatientsService} from "../services/patients.service";
import {PatientModel} from "../models/patient.model";
import {AppIcon} from "../../core/_models/app-icon.model";
import {faEye, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {FormBuilder, Validators} from "@angular/forms";
import {VitalModel} from "../models/vital.model";

@Component({
  selector: 'app-patient',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientEditId: number;
  patients: PatientModel[];
  patient: PatientModel = new PatientModel();
  editPatientForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    vitals: this.formBuilder.group({
      weight: ['', Validators.required],
      height: ['', Validators.required],
      bloodPressure: ['', Validators.required],
      temperature: ['', Validators.required],
    })
  });
  editIcon: AppIcon = {
    icon: faPenToSquare,
    size: "2x"
  }
  viewIcon: AppIcon = {
    icon: faEye,
    size: "2x"
  }

  constructor(private patientsService: PatientsService,
              private formBuilder: FormBuilder) {
    this.patient.vitals = new VitalModel();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.patientsService
      .getAll()
      .subscribe(data => {
        this.patients = data;
      });
  }

  getPatient(patient: PatientModel) {
    this.patient = patient;
  }

  buildPatient(): PatientModel {
    this.patient.firstName = this.editPatientForm.value.firstName!;
    this.patient.lastName = this.editPatientForm.value.lastName!;
    this.patient.vitals.weight = +this.editPatientForm.value.vitals?.weight!;
    this.patient.vitals.height = +this.editPatientForm.value.vitals?.height!;
    this.patient.vitals.bloodPressure = this.editPatientForm.value.vitals?.bloodPressure!;
    this.patient.vitals.temperature = +this.editPatientForm.value.vitals?.temperature!;
    return this.patient;
  }

  onUpdate() {
    this.patientsService.updateById(this.patientEditId, this.buildPatient()).subscribe({
      error: (err: any) => console.log(err),
      complete: () => {
      }
    });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  deletePatient() {
    this.patientsService.deleteById(this.patient.id)
      .subscribe({
        error: (err) => console.log(err),
      });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  populatePatient(patient: PatientModel) {
    this.patientEditId = patient.id;
    this.editPatientForm.patchValue({
      firstName: patient.firstName,
      lastName: patient.lastName,
      vitals: {
        bloodPressure: patient.vitals.bloodPressure,
        height: String(patient.vitals.height),
        weight: String(patient.vitals.weight),
        temperature: String(patient.vitals.temperature)
      }
    });
  }
}
