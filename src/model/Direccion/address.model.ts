export interface IAddress {
    id: string;
    userId: string;
    type: 'SHIPPING' | 'BILLING';
    firstName: string;
    lastName: string;
    streetAddress: string;
    apartment?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phone: string;
    isDefault: boolean;
  }