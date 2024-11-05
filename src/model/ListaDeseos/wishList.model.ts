import { IProduct } from "../Producto/product.model";

export interface IWishlist {
    id: string;
    userId: string;
    products: IProduct[];
    createdAt: Date;
    updatedAt: Date;
  }