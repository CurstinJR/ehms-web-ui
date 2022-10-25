import { Component, OnInit } from '@angular/core';
import {AppointmentsService} from "../services/appointments.service";
import {AppointmentModel} from "../models/appointment.model";
import {PatientModel} from "../models/patient.model";
import {PatientsService} from "../services/patients.service";


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments$: AppointmentModel[];
  patients$: PatientModel[] ;

  constructor(private appointmentsService: AppointmentsService,
              private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.getAllAppointments();
    this.getAllPatients();
  }

  getAllAppointments() {
    this.appointmentsService
      .getAll()
      .subscribe(data => {
        this.appointments$ = data;
      });
  }
  getAllPatients() {
    this.patientsService
      .getAll()
      .subscribe(data => {
        this.patients$ = data;
      });
  }


}
