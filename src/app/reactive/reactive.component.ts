import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {freeApiService} from '../services/freeapi.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})


export class ReactiveComponent implements OnInit {
  public regform = new FormGroup({
    Username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    DateofBirth: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    // Gender:new FormControl('',[Validators.required])
  });
public title= 'Registrationform';
constructor(private api:freeApiService) {

 }

ngOnInit() {
  this.api.apiCall().subscribe((data)=>{
    console.log("get api data",data);
    // this.title=data['title'];
  })
 }
 getuserformdata(data:any)
 {
  this.api.postcall(data).subscribe((result)=>{
    console.log(result)
  })
 }


onSubmit() {
  this.title='submitform'
  console.log(this.regform.value)
  }
  // console.log("form.value")
}




