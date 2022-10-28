import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {PatientsService} from "../../services/patients.service";
import {ToastrService} from "ngx-toastr";
import {BillsService} from "../../services/bills.service";
import {PatientModel} from "../../models/patient.model";
import {BillModel} from "../../models/bill.model";

@Component({
  selector: 'app-bills-add-modal',
  templateUrl: './bills-add-modal.component.html',
  styleUrls: ['./bills-add-modal.component.css']
})
export class BillsAddModalComponent implements OnInit {

  patients: PatientModel[];
  addBillForm = this.formBuilder.group({
    amount: new FormControl<number>(0, {nonNullable: true, validators: Validators.required}),
    date: new FormControl<string>('', {nonNullable: true, validators: Validators.required}),
    patient: new FormControl<PatientModel>(new PatientModel(), {
      nonNullable: true,
      validators: Validators.required
    })
  });

  constructor(private formBuilder: FormBuilder,
              private patientsService: PatientsService,
              private billsService: BillsService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientsService
      .getAll()
      .subscribe({
        next: (data) => this.patients = data,
        error: (err) => console.log(err)
      });
  }

  onSubmit() {
    const bill: BillModel = {
      id: 0,
      amount: this.addBillForm.getRawValue().amount,
      date: this.addBillForm.getRawValue().date,
      patient: this.addBillForm.getRawValue().patient
    }
    this.billsService.save(bill)
      .subscribe({
        error: (err) => this.toastrService.error(err),
        complete: () => this.toastrService.success(
          `Bill created for ${bill.patient.firstName}`,
          "Bill created")
      });
    setTimeout(() => {
      window.location.reload();
    }, 1300);
  }
}
