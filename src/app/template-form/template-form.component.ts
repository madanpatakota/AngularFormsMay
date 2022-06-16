import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit, AfterViewInit {

  constructor() { }


  @ViewChild("form") ngForm: NgForm;

  status = ["Single", "Married"];
  comments: any = "";

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log("Before the form load", this.ngForm);

    // setTimeout(() => {
    //   // this.form.setValue({
    //   //   'FirstGroup': {
    //   //     "UCity": "2",
    //   //     "UEmail": "madan@gmail.com",
    //   //     "UName": "Madan"
    //   //   },
    //   //   "SecondGroup": {
    //   //     status: "Single",
    //   //     userComments: "asdfasdas"
    //   //   }
    //   // })
    // }, 2000);

    setTimeout(() => {
      this.ngForm.form.patchValue({
        "SecondGroup": {
          status: "Single",
          userComments: "asdfasdas"
        }
      })
    }, 2000);
  }

  CityList = [{
    Id: 1, Name: "Hyderabad"
  },
  {
    Id: 2, Name: "Bangolore"
  },
  {
    Id: 3, Name: "Chennai"
  }]


  // i want to know what is the form after the intilization

  //whatever iam getting from heml
  //here ngForm will create the object
  evtSubmit(form: NgForm) {
    console.log(form);
    // yuou have unerstand this object
    // without this object you cannot understand.......
  }

  evtReset(){
    this.ngForm.reset();
  }

}
