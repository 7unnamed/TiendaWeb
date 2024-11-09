import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input, Checkbox, Button, Select, SelectItem } from "@nextui-org/react";
import { SearchIcon, FilterIcon, XIcon } from 'lucide-react';
import { ProductsGrid } from './productGrid.component';
import { products } from '../../Data/productos.data';
import type { IProduct } from '../../model/Producto/product.model';

export const ProductsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
    const [isHandmadeOnly, setIsHandmadeOnly] = useState(false);
    const [isNewOnly, setIsNewOnly] = useState(false);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products);
    const [isLoading, setIsLoading] = useState(true);

    // Get unique values from products
    const origins = [...new Set(products.map(product => product.origin.country))];
    const materials = [...new Set(products.flatMap(product => product.materials))];
    const categories = [...new Set(products.map(product => product.category))];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let filtered = products;

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply origin filter
        if (selectedOrigins.length > 0) {
            filtered = filtered.filter(product =>
                selectedOrigins.includes(product.origin.country)
            );
        }

        // Apply handmade filter
        if (isHandmadeOnly) {
            filtered = filtered.filter(product => product.origin.handmade);
        }

        // Apply new products filter
        if (isNewOnly) {
            filtered = filtered.filter(product => product.isNew);
        }

        // Apply materials filter
        if (selectedMaterials.length > 0) {
            filtered = filtered.filter(product =>
                product.materials.some(material => selectedMaterials.includes(material))
            );
        }

        // Apply category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        setFilteredProducts(filtered);
    }, [searchTerm, selectedOrigins, isHandmadeOnly, isNewOnly, selectedMaterials, selectedCategories]);

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
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                    <div className="w-full md:w-96">
                        <Input
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            startContent={<SearchIcon className="text-[#8B6F4E]" size={20} />}
                            classNames={{
                                input: "bg-white text-[#5D4837]",
                                inputWrapper: "bg-white border-2 border-[#8B6F4E]/20 hover:border-[#8B6F4E]/40 focus-within:border-[#8B6F4E]"
                            }}
                        />
                    </div>
                    <Button
                        className="bg-[#4A5D3F] text-[#F5F0E9]"
                        onClick={() => setShowFilters(!showFilters)}
                        startContent={showFilters ? <XIcon size={20} /> : <FilterIcon size={20} />}
                    >
                        {showFilters ? 'Cerrar Filtros' : 'Mostrar Filtros'}
                    </Button>
                </div>

                {/* Expandable Filters */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mb-8"
                        >
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Origins Filter */}
                                    <div>
                                        <h3 className="text-[#5D4837] font-medium mb-3">Origen</h3>
                                        <div className="space-y-2">
                                            {origins.map((origin) => (
                                                <Checkbox
                                                    key={origin}
                                                    color="success"
                                                    isSelected={selectedOrigins.includes(origin)}
                                                    onValueChange={(isSelected) => {
                                                        if (isSelected) {
                                                            setSelectedOrigins([...selectedOrigins, origin]);
                                                        } else {
                                                            setSelectedOrigins(selectedOrigins.filter(o => o !== origin));
                                                        }
                                                    }}
                                                >
                                                    {origin}
                                                </Checkbox>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Categories Filter */}
                                    <div>
                                        <h3 className="text-[#5D4837] font-medium mb-3">Categorías</h3>
                                        <Select
                                            items={categories.map(category => ({
                                                key: category,
                                                label: category,
                                                value: category
                                            }))}
                                            selectionMode="multiple"
                                            selectedKeys={new Set(selectedCategories)}
                                            onSelectionChange={(keys) => {
                                                if (keys instanceof Set) {
                                                    setSelectedCategories(Array.from(keys) as string[]);
                                                }
                                            }}
                                            className="max-w-xs"
                                        >
                                            {(item) => (
                                                <SelectItem key={item.value}>
                                                    {item.label}
                                                </SelectItem>
                                            )}
                                        </Select>
                                    </div>

                                    {/* Materials Filter */}
                                    <div>
                                        <h3 className="text-[#5D4837] font-medium mb-3">Materiales</h3>
                                        <Select
                                            items={materials.map(material => ({
                                                key: material,
                                                label: material,
                                                value: material
                                            }))}
                                            selectionMode="multiple"
                                            selectedKeys={new Set(selectedMaterials)}
                                            onSelectionChange={(keys) => {
                                                if (keys instanceof Set) {
                                                    setSelectedMaterials(Array.from(keys) as string[]);
                                                }
                                            }}
                                            className="max-w-xs"
                                        >
                                            {(item) => (
                                                <SelectItem key={item.value}>
                                                    {item.label}
                                                </SelectItem>
                                            )}
                                        </Select>
                                    </div>

                                    {/* Additional Filters */}
                                    <div>
                                        <h3 className="text-[#5D4837] font-medium mb-3">Filtros Adicionales</h3>
                                        <div className="space-y-2">
                                            <Checkbox
                                                color="success"
                                                isSelected={isHandmadeOnly}
                                                onValueChange={setIsHandmadeOnly}
                                            >
                                                Solo Artesanales
                                            </Checkbox>
                                            <Checkbox
                                                color="success"
                                                isSelected={isNewOnly}
                                                onValueChange={setIsNewOnly}
                                            >
                                                Solo Productos Nuevos
                                            </Checkbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

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