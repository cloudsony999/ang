import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }



  getMessage() {
    alert("i am in getMessage")
    let token = sessionStorage.getItem('token')
    alert(token)

    const headers = new HttpHeaders({ Authorization: token });
    return this.httpClient.get('http://localhost:9999/secure/getallemployees', { headers, responseType: 'text' });
  }
}