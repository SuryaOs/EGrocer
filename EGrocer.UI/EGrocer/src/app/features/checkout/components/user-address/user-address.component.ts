import { Component, Inject, OnInit } from '@angular/core';
import { IUserAddressService, UserAddressServiceToken } from '../../service/user-address-i.service';
import { IUserAddress } from '../../models/user-address-i';

@Component({
  selector: "app-user-address",
  templateUrl: "./user-address.component.html",
  styleUrls: ["./user-address.component.scss"],
})
export class UserAddressComponent implements OnInit {
  userAddress!: IUserAddress;

  constructor(
    @Inject(UserAddressServiceToken)
    private _userAddressService: IUserAddressService
  ) {}

  ngOnInit(): void {
    this.loadAddress();
  }

  changeAddress() {

  }

  private loadAddress() {
    const userId = localStorage.getItem("userId");
    if (userId)
      this._userAddressService.get(userId).subscribe((response) => {
        this.userAddress = response[0];
      });
  }
}
