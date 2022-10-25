import {Component, OnInit} from '@angular/core';
import {AppointmentsService} from "../services/appointments.service";
import {AppointmentModel} from "../models/appointment.model";


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments$: AppointmentModel[];

  constructor(private appointmentsService: AppointmentsService) {
  }

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.appointmentsService
      .getAll()
      .subscribe(data => {
        this.appointments$ = data;
      });
  }
}
