import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roleForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl('')
  })
  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.roleForm.value)
  }
  //onDelete removes a role in the db.
  onDelete(id: number){
    //Perform delete operation by calling the right service
  }
}
