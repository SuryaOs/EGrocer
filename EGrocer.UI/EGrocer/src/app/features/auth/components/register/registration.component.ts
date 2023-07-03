import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthServiceToken, IAuthService } from "../../services/auth-i.service";
import { IRegister } from "../../models/register-i";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    @Inject(AuthServiceToken)
    private _authService: IAuthService
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.register(this.registrationForm.value);
    }
  }

  goBack() {
    this.router.navigate(['/auth/login']);
  }

  private register(formData: IRegister) {
    this._authService.register(formData).subscribe(response => {
      console.log(response);
    })
  }
}
