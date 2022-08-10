import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(email, password) {

    var body = JSON.stringify({ "userName": email, "password": password })
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post('http://localhost:9999/user/login', body, { headers: headers, responseType: 'text' }).pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('password', password);
          sessionStorage.setItem('token', 'Bearer ' + userData);
          console.log(email)
          console.log(userData)
          return userData;
        }
      )

    );
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('token')
  }
}