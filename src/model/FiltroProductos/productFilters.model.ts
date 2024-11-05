export interface IProductFilters {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sizes?: string[];
    colors?: string[];
    rating?: number;
    sort?: 'price_asc' | 'price_desc' | 'newest' | 'rating';
    search?: string;
    page?: number;
    limit?: number;
  }