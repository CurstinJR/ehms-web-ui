import {PatientModel} from "./patient.model";

export class AppointmentModel {
  appointmentId?: number;
  appointmentTime: string;
  appointmentDate: string;
  patient: PatientModel;
}
