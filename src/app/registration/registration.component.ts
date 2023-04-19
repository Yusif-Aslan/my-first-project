import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private http: HttpClient) { }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const url = 'http://localhost:8080/public/user/create';
    this.http.post(url, formData).subscribe(
      (response) => {
        console.log(response);
        form.reset(); // clears the form
      },
      (error) => {
        console.error(error);
      }
    );
  }
}