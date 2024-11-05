import React from 'react';
import { ProductCard } from './productCard.component';
import type { IProduct } from '../../model/Producto/product.model';

interface ProductsGridProps {
    products: IProduct[];
    className?: string;
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({
    products,
    className = ""
}) => {
    return (
        <section className="w-full py-8">
            <div className="w-full max-w-[1440px] mx-auto px-4">
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            images={product.images}
                            isNew={product.isNew}
                            shortDescription={product.shortDescription}
                            origin={product.origin}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsGrid;