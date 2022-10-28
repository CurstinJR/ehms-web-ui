import {Component, OnInit} from '@angular/core';
import {BillModel} from "../models/bill.model";
import {BillsService} from "../services/bills.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bills: BillModel[];

  constructor(private billsService: BillsService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllBills();
  }

  getAllBills() {
    this.billsService
      .getAll()
      .subscribe({
        next: (data) => this.bills = data,
        error: (err) => this.toastrService.error("Could not fetch data", "Error")
      })
  }
}
