import {Component, OnInit} from '@angular/core';
import {PatientModel} from "../../models/patient.model";
import {PatientsService} from "../../services/patients.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-appointment-add-modal',
  templateUrl: './appointment-add-modal.component.html',
  styleUrls: ['./appointment-add-modal.component.css']
})
export class AppointmentAddModalComponent implements OnInit {

  patients$: PatientModel[];
  addAppointmentForm = this.formBuilder.group({
    time: ['', Validators.required],
    date: ['', Validators.required],
    patient: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private patientsService: PatientsService) {
  }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientsService
      .getAll()
      .subscribe(data => {
        this.patients$ = data;
      });
  }

  onSubmit() {
    console.log(this.addAppointmentForm.value);
  }
}
