import { IProduct } from "../../product/models/product-i"

export interface IOrderDetails{
  userAddressId: number,
  totalItem: number,
  totalPrice: number,
  orderDetailsRequest: Array<IAddProduct>
}

export interface IAddProduct{
  productId: number,
  quantity: number,
  totalPrice: number
}

export interface ICarts{
product: IProduct,
quantity: number
}
