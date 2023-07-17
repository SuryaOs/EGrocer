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
  userAddresses!: IUserAddress[];
  selectedAddress!: IUserAddress;
  isModalOpen: boolean = false;
  isDefault: boolean = false;

  constructor(
    @Inject(UserAddressServiceToken)
    private _userAddressService: IUserAddressService
  ) {}

  ngOnInit(): void {
    this.loadAddress();
  }

  changeAddress() {
    this.selectedAddress = { ...this.userAddress }; // Clone the current user address
    this.isModalOpen = true;
  }

  selectAddress(address: IUserAddress) {
    this.selectedAddress = address;
  }

  saveAddress() {
    this.userAddress = { ...this.selectedAddress }; // Update the user address with the selected address
    this.isModalOpen = false;
  }

  cancelAddress() {
    this.isModalOpen = false;
  }

  private loadAddress() {
    const userId = localStorage.getItem("userId");
    if (userId)
      this._userAddressService.get(userId).subscribe((response) => {
        this.userAddresses = response;
        const defaultAddress = this.userAddresses.filter((address) => address.isDefault);

        // Check if a default address is found
        if (defaultAddress.length > 0) {
          this.userAddress = defaultAddress[0];
        } else if (this.userAddresses.length > 0) {
          this.userAddress = this.userAddresses[0];
        }
      });
  }
}
