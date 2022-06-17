import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {

  constructor() { }

  //form = 

  userForm: FormGroup;

  ngOnInit(): void {

    // formgroup->for the form
    // i have to intilize the formcontrols
    // formgroup can contains the another formgroup
    // formgroup contains the form controls

    this.userForm = new FormGroup(
      {
        'emailsForm': new FormGroup(
          {
            'userEmail': new FormControl("", 
                                            [ 
                                             Validators.required ,
                                             Validators.email ,
                                             Validators.maxLength(15)])
          }
        )
      });
  }

  evtClick() {
    console.log(this.userForm);
  }

}
