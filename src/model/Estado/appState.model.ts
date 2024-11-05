import { ICart } from "../Carrito/carrito.model";
import { IWishlist } from "../ListaDeseos/wishList.model";
import { IUser } from "../Usuario/user.model";

export interface IAppState {
    user: IUser | null;
    cart: ICart | null;
    wishlist: IWishlist | null;
    isLoading: boolean;
    error: string | null;
  }