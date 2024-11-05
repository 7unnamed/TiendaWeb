import { ICartItem } from "../ItemCarrito/CartItem.model";

export interface ICart {
    id: string;
    userId?: string;
    items: ICartItem[];
    totalItems: number;
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    updatedAt: Date;
  }