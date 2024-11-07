import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../model/Producto/product.model';
import { products } from '../../Data/productos.data';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);

    useEffect(() => {
        if (id) {
            const foundProduct = products.find(p => p.id === id);
            if (foundProduct) {
                setProduct(foundProduct);
            }
        }
    }, [id]);

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const handleWhatsAppClick = () => {
        if (!product) return;
        const message = `Hola, estoy interesado en el producto: ${product.name}`;
        const whatsappUrl = `https://wa.me/51997550552?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (!product) {
        return (
            <motion.div
                className="min-h-screen flex items-center justify-center bg-[#F5F0E9]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className="text-center text-[#5D4837]">
                    <h2 className="text-2xl font-bold mb-2">Producto no encontrado</h2>
                    <p>Redirigiendo al inicio...</p>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F5F0E9]">
            {/* Header con gradiente */}
            <div className="bg-gradient-to-r from-[#8B6F4E] via-[#7A614A] to-[#5D4837] py-8 rounded-2xl">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h1 
                        className="text-3xl md:text-4xl font-bold text-[#F5F0E9] mb-2"
                        variants={fadeIn}
                    >
                        {product.name}
                    </motion.h1>
                    <motion.p 
                        className="text-[#E5DED3]"
                        variants={fadeIn}
                    >
                        {product.shortDescription}
                    </motion.p>
                </div>
            </div>

            {/* Contenido Principal */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Panel Izquierdo */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div
                            className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={product.images}
                                alt={product.name}
                                className="w-full rounded-2xl"
                            />
                            {product.isNew && (
                                <span className="absolute top-4 right-4 bg-[#4A5D3F] text-[#F5F0E9] px-4 py-2 rounded-full text-sm font-semibold">
                                    Nuevo
                                </span>
                            )}
                        </motion.div>

                        {/* Detalles Rápidos */}
                        <div className="bg-gradient-to-r from-[#5D4837] to-[#8B6F4E] p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-[#F5F0E9]">Detalles Rápidos</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#F5F0E9]/10 backdrop-blur-lg p-4 rounded-xl">
                                    <span className="block text-[#E5DED3] text-sm">Tamaño</span>
                                    <span className="text-lg font-medium text-[#F5F0E9]">
                                        {product.size.value} {product.size.unit}
                                    </span>
                                </div>
                                <div className="bg-[#F5F0E9]/10 backdrop-blur-lg p-4 rounded-xl">
                                    <span className="block text-[#E5DED3] text-sm">Origen</span>
                                    <span className="text-lg font-medium text-[#F5F0E9]">
                                        {product.origin.country}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Panel Derecho */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Descripción */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold text-[#5D4837] mb-4">Descripción</h3>
                            <p className="text-[#7A614A]">{product.fullDescription}</p>
                        </div>

                        {/* Características */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold text-[#5D4837] mb-4">Características</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {product.features.map((feature, index) => (
                                    <motion.div 
                                        key={index}
                                        className="bg-[#F5F0E9] p-4 rounded-xl flex items-start space-x-3"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="w-2 h-2 mt-2 rounded-full bg-[#4A5D3F]"></div>
                                        <span className="text-[#5D4837]">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Materiales y Cuidados */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Materiales */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-semibold text-[#5D4837] mb-4">Materiales</h3>
                                <ul className="space-y-3">
                                    {product.materials.map((material, index) => (
                                        <li key={index} className="flex items-center space-x-2 text-[#7A614A]">
                                            <span className="w-1.5 h-1.5 bg-[#8B6F4E] rounded-full"></span>
                                            <span>{material}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cuidados */}
                            {product.care && product.care.length > 0 && (
                                <div className="bg-white p-6 rounded-2xl shadow-lg">
                                    <h3 className="text-xl font-semibold text-[#5D4837] mb-4">Cuidados</h3>
                                    <ul className="space-y-3">
                                        {product.care.map((careItem, index) => (
                                            <li key={index} className="flex items-center space-x-2 text-[#7A614A]">
                                                <span className="w-1.5 h-1.5 bg-[#8B6F4E] rounded-full"></span>
                                                <span>{careItem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Botón de WhatsApp */}
                        <motion.button
                            className={`w-full p-4 rounded-xl shadow-lg flex items-center justify-center space-x-3 text-[#F5F0E9] font-medium ${
                                product.available 
                                    ? 'bg-gradient-to-r from-[#4A5D3F] to-[#3D4E35] hover:from-[#3D4E35] hover:to-[#4A5D3F]' 
                                    : 'bg-[#8B6F4E]'
                            }`}
                            onClick={handleWhatsAppClick}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={!product.available}
                        >
                            <i className="fab fa-whatsapp text-2xl"></i>
                            <span className="text-lg">
                                {product.available
                                    ? 'Solicitar información por WhatsApp'
                                    : 'Producto no disponible'}
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;