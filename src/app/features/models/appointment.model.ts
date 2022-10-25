import {PatientModel} from "./patient.model";

export interface AppointmentModel {
  appointmentId?: number,
  appointmentTime: string,
  appointmentDate: string,
  patient: PatientModel
}
