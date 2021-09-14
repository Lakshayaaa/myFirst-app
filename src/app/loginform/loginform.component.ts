import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  public loginform= new FormGroup ({
    Username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    DateofBirth: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),


  })

  constructor() { }

  ngOnInit(): void {
  }

}
