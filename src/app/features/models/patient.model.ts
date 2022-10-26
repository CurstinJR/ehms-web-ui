import {VitalModel} from "./vital.model";

export class PatientModel {
  id: number;
  firstName: string;
  lastName: string;
  vitals: VitalModel;
}
