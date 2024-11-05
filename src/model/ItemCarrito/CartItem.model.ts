import { IProduct } from "../Producto/product.model";

export interface ICartItem {
    id: string;
    productId: string;
    product: IProduct;
    quantity: number;
    size?: string;
    color?: string;
  }