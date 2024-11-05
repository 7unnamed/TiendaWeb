import { IAddress } from "../Direccion/address.model";
import { ICartItem } from "../ItemCarrito/CartItem.model";

export interface IOrder {
    id: string;
    userId: string;
    items: ICartItem[];
    status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
    shippingAddress: IAddress;
    billingAddress: IAddress;
    paymentMethod: string;
    paymentStatus: 'PENDING' | 'PAID' | 'FAILED';
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    trackingNumber?: string;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
  }