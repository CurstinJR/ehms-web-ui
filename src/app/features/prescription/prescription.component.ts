import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  prescriptionForm = new FormGroup({
    prescriptionNumber: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl('')
  })

  constructor(private route: Router) {
  }


  ngOnInit(): void {
  }

  view(prescriptionNumber: string) {
    this.route.navigate(['prescription/view/' + prescriptionNumber])
  }

  onsubmit() {
    console.warn(this.prescriptionForm.value)
  }

}
