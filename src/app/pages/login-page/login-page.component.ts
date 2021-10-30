import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  credentials = {username: '', password: ''}

  constructor(private authS: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.credentials);
    // this.authS.authenticate(this.credentials, () => {
    //   this.router.navigate(['/'])
    // })
  }

}
