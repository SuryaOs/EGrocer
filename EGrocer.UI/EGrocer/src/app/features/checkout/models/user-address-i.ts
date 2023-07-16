export interface IAddUserAddress {
  city: string;
  state: string;
  address1: string;
  address2: string;
  zipCode: number;
  mobileNumber: string;
  isDefault: boolean;
  userId: string;
}

export interface IUserAddress extends IAddUserAddress {
  id: number;
}
