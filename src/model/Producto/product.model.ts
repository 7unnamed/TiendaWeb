
export interface IProduct {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  images: string;
  category: string;
  materials: string[];
  size: {
      value: number;
      unit: string;
  };
  colors?: string[];
  features: string[];
  benefits?: string[];
  care: string[];
  origin: {
      country: string;
      handmade: boolean;
  };
  isNew?: boolean;
  available?: boolean;
  specifications?: {
      [key: string]: string;
  };
  createdAt: Date;
  updatedAt: Date;
}