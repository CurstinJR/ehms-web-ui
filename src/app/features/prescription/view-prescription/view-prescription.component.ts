import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.css']
})
export class ViewPrescriptionComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  id:string
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id']
    })
  }

}
