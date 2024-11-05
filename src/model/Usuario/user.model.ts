import { IAddress } from "../Direccion/address.model";
import { IOrder } from "../Orden/orden.model";

export interface IUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role: 'USER' | 'ADMIN';
    addresses?: IAddress[];
    orders?: IOrder[];
    createdAt: Date;
    updatedAt: Date;
  }