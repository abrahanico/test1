import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { } 

  login() {
    

    if (this.username === 'demo' && this.password === 'password') {
      this.router.navigate(['/main']);
    } else {
      alert('Inloggning misslyckades. Kontrollera användarnamn och lösenord.');
    }
  }
}
