import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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


  //whatever iam getting from heml
  //here ngForm will create the object
  evtSubmit(form:NgForm){
    console.log(form);
    // yuou have unerstand this object
    // without this object you cannot understand.......
  }

}
