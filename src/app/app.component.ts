import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  ip: string;
  constructor(private http: Http) {
    this.http.get('http://ip.jsontest.com/')
    .toPromise()
    .then(res => res.json())
    .then(resJSON => this.ip = resJSON.ip);
  }
}
