import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ILogin } from "../../models/login-i";
import { AuthServiceToken, IAuthService } from "../../services/auth-i.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(AuthServiceToken)
    private _authService: IAuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.login(this.loginForm.value);
  }

  goToRegistration(): void {
    this.router.navigate(["/auth/registration"]);
  }

  goToProduct(): void {
    this.router.navigate(["/product-category"]);
  }

  private login(formData: ILogin) {
    this._authService.login(formData).subscribe((response) => {
      if (response.result) {
        localStorage.setItem("authToken", response.token);
        this.goToProduct()
      }
    });
  }
}
