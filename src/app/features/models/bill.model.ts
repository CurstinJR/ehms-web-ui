import {PatientModel} from "./patient.model";

export class BillModel {
  id: number;
  amount: number;
  date: string;
  patient: PatientModel;
}
