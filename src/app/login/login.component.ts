import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { LoginServiceService } from '../services/login-service.service';
import {catchError, EMPTY} from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!:FormGroup
  mensajeError: string= ''
  constructor(private authservice: LoginServiceService,
              private router: Router){}


  ngOnInit():void {
    this.form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  }

  onSubmit(){
    this.authservice.login(this.form.value).pipe(

      catchError((e) => {
        console.log(e)
        this.mensajeError = e.statusText
        console.log(this.mensajeError)
        return EMPTY
      })

    ).subscribe(response => {
      localStorage.setItem('token', response.access_token)
      this.authservice.profile().subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data))

    })
  })
  this.router.navigate(['/dashboard'])
}
}
