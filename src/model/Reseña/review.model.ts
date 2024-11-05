import { IUser } from "../Usuario/user.model";

export interface IReview {
    id: string;
    productId: string;
    userId: string;
    user: IUser;
    rating: number;
    title: string;
    comment: string;
    images?: string[];
    createdAt: Date;
    updatedAt: Date;
  }