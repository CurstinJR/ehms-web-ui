import {Component, OnInit} from '@angular/core';
import {AppointmentsService} from "../services/appointments.service";
import {AppointmentModel} from "../models/appointment.model";
import {PatientModel} from "../models/patient.model";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: AppointmentModel[];
  appointment: AppointmentModel = new AppointmentModel();

  constructor(private appointmentsService: AppointmentsService,
              private toastrService: ToastrService) {
    this.appointment.patient = new PatientModel();
  }

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.appointmentsService
      .getAll()
      .subscribe(data => {
        this.appointments = data;
      });
  }

  getAppointment(appointment: AppointmentModel) {
    this.appointment = appointment;
  }

  deleteAppointment() {
    if (this.appointment.appointmentId == undefined) {
      this.toastrService.warning("Please select a record to delete", "No Record Found")
    } else {
      this.appointmentsService.deleteById(this.appointment.appointmentId)
        .subscribe({
          error: (err) => this.toastrService.error(err),
          complete: () => this.toastrService.success(`Appointment removed`, 'Appointment removed')
        });
      setTimeout(() => {
        window.location.reload();
      }, 1300);
    }
  }
}
