import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-patients-add-modal',
  templateUrl: './patients-add-modal.component.html',
  styleUrls: ['./patients-add-modal.component.css']
})
export class PatientsAddModalComponent implements OnInit {

  addPatientForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    vitals: this.formBuilder.group({
      weight: ['', Validators.required],
      height: ['', Validators.required],
      bloodPressure: ['', Validators.required],
      temperature: ['', Validators.required],
    }),
    patient: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addPatientForm.value);
  }
}
