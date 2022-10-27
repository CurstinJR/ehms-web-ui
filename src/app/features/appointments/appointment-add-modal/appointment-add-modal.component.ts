import {Component, OnInit} from '@angular/core';
import {PatientModel} from "../../models/patient.model";
import {PatientsService} from "../../services/patients.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AppointmentsService} from "../../services/appointments.service";
import {AppointmentModel} from "../../models/appointment.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-appointment-add-modal',
  templateUrl: './appointment-add-modal.component.html',
  styleUrls: ['./appointment-add-modal.component.css']
})
export class AppointmentAddModalComponent implements OnInit {

  patients$: PatientModel[];
  addAppointmentForm = this.formBuilder.group({
    time: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    date: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    patient: new FormControl<PatientModel>(new PatientModel(), {
      nonNullable: true,
      validators: Validators.required
    })
  });

  constructor(private formBuilder: FormBuilder,
              private patientsService: PatientsService,
              private appointmentService: AppointmentsService,
              private toastrService: ToastrService) {
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
    const appointment: AppointmentModel = {
      appointmentId: 0,
      appointmentTime: this.addAppointmentForm.getRawValue().time,
      appointmentDate: this.addAppointmentForm.getRawValue().date,
      patient: this.addAppointmentForm.getRawValue().patient
    }
    this.appointmentService.save(appointment)
      .subscribe({
        error: (err) => this.toastrService.error(err),
        complete: () => this.toastrService.success(
          `Appointment booked for ${appointment.patient.firstName}`,
          "Appointment booked")
      });
    setTimeout(() => {
      window.location.reload();
    }, 1300);
  }
}
