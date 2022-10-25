import {PatientModel} from "./patient.model";

export class VitalModel {
  id: number;
  weight: number;
  height: number;
  bloodPressure: string;
  temperature: number;
  patient: PatientModel;
}
