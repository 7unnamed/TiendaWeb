import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductsGrid } from './productGrid.component';
import { products } from '../../Data/productos.data';
import type { IProduct } from '../../model/Producto/product.model';

export const ProductsPage: React.FC = () => {
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setFilteredProducts(products);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#FFF9F0]"
        >
            {/* Hero Section with Background Image */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative h-64 overflow-hidden rounded-xl"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/Paisaje3.webp')",
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to bottom, rgba(93, 72, 55, 0.9), rgba(93, 72, 55, 0.7))"
                    }}
                />
                <div className="relative max-w-[1440px] mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-[#F5F0E9] mb-4"
                    >
                        Nuestros Productos
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-[#F5F0E9]/90 max-w-2xl"
                    >
                        Descubre nuestra colección de peluches artesanales inspirados en la fauna peruana
                    </motion.p>
                </div>
            </motion.section>

            {/* Filters and Search Section */}
            <div className="max-w-[1440px] mx-auto px-4 py-8">

                {/* Loading State */}
                <AnimatePresence>
                    {isLoading ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-center items-center py-20"
                        >
                            <div className="w-16 h-16 border-4 border-[#8B6F4E] border-t-transparent rounded-full animate-spin" />
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Results Count */}
                            <div className="mb-6">
                                <p className="text-[#5D4837]">
                                    {filteredProducts.length} productos encontrados
                                </p>
                            </div>

                            {/* Products Grid */}
                            <ProductsGrid products={filteredProducts} />

                            {/* No Results Message */}
                            {filteredProducts.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-20"
                                >
                                    <p className="text-xl text-[#5D4837]">No se encontraron productos</p>
                                    <p className="text-[#8B6F4E] mt-2">Intenta ajustar los filtros de búsqueda</p>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ProductsPage;