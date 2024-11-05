import React from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import type { IProduct } from '../../model/Producto/product.model';

interface ProductCardProps extends Pick<IProduct, 'id' | 'name' | 'images' | 'isNew' | 'shortDescription' | 'origin'> {
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    images,
    isNew = false,
    shortDescription,
    origin,
    className = ""
}) => {
    return (
        <Link to={`/producto/${id}`}>
            <motion.div
                whileHover={{ 
                    y: -5,
                    scale: 1.02 
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                    duration: 0.2,
                    type: "spring",
                    stiffness: 300
                }}
                className={`w-full cursor-pointer ${className}`}
            >
                <Card 
                    className="border-none shadow-lg bg-[#FFF9F0] rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    <CardBody className="p-0 relative">
                        {/* Badge Container */}
                        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                            {isNew && (
                                <motion.span 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="px-3 py-1 bg-[#4A5D3F] text-[#F5F0E9] text-xs font-medium rounded-full shadow-md"
                                >
                                    Nuevo
                                </motion.span>
                            )}
                            {origin.handmade && (
                                <motion.span 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="px-3 py-1 bg-[#8B6F4E] text-[#F5F0E9] text-xs font-medium rounded-full shadow-md"
                                >
                                    Artesanal
                                </motion.span>
                            )}
                        </div>

                        {/* Image with hover effect */}
                        <div className="aspect-square relative overflow-hidden group">
                            <img
                                alt={name}
                                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                                src={images}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#5D4837]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                        </div>
                    </CardBody>
                    <CardFooter className="flex flex-col px-4 py-4 bg-[#F5F0E9]">
                        <div className="w-full">
                            <h3 className="text-lg font-medium text-[#5D4837] hover:text-[#8B6F4E] transition-colors line-clamp-2">
                                {name}
                            </h3>
                            <p className="text-sm text-[#8B6F4E] mt-2 line-clamp-2">
                                {shortDescription}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs text-[#4A5D3F] font-medium">
                                    Origen: {origin.country}
                                </span>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        </Link>
    );
};

export default ProductCard;