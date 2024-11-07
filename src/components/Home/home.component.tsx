import { motion, AnimatePresence } from 'framer-motion';
import { ProductsGrid } from '../Producto/productGrid.component'
import { products } from '../../Data/productos.data'
import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FeaturesSection } from '../Carateristicas/featuresSection.component'
import paisaje from '../../assets/Paisaje.webp'
import paisaje2 from '../../assets/Paisaje2.webp'
import paisaje3 from '../../assets/Paisaje3.webp'

const slides = [
    {
        title: "Descubre nuestros productos",
        subtitle: "Las mejores ofertas en un solo lugar",
        color: "from-[#8B6F4E]/90 via-[#7A614A]/90 to-[#5D4837]/90", // Degradado semitransparente
        image: paisaje, // Reemplaza con tu ruta de imagen
        description: "Machu Picchu con sus majestuosas terrazas"
    },
    {
        title: "Calidad garantizada",
        subtitle: "Productos de las mejor calidad",
        color: "from-[#5D4837]/90 via-[#4A5D3F]/90 to-[#3D4E35]/90", // Degradado semitransparente
        image: paisaje3, // Reemplaza con tu ruta de imagen
        description: "Valle Sagrado de los Incas"
    },
    {
        title: "Envíos a todo el país",
        subtitle: "Recibe tu pedido donde estés",
        color: "from-[#8B6F4E]/90 via-[#766B57]/90 to-[#4A5D3F]/90", // Degradado semitransparente
        image: paisaje2, // Reemplaza con tu ruta de imagen
        description: "Alpacas en las alturas andinas"
    }
];

const HomePage = () => {
    // Estados para el slider
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    // Estado para controlar la cantidad de productos
    const [displayCount, setDisplayCount] = useState(4);
    const [showingAll, setShowingAll] = useState(false);

    // Auto-play para el slider
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const handlePrevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleNextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handleViewAll = () => {
        setShowingAll(!showingAll);
        setDisplayCount(showingAll ? 4 : products.length);
    };

    return (
        <div className="space-y-12 bg-[#F5F0E9]"> {/* Fondo general beige claro */}
            {/* Hero Section with Slider */}
            <section className="relative h-[500px] overflow-hidden rounded-2xl">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0"
                    >
                        {/* Imagen de fondo */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                            style={{
                                backgroundImage: `url(${slides[currentSlide].image})`,
                                filter: 'brightness(0.8)'
                            }}
                        />
                        
                        {/* Capa de gradiente */}
                        <div 
                            className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].color} transition-colors duration-500 mix-blend-multiply`}
                        />

                        {/* Contenido */}
                        <div className="relative h-full flex flex-col justify-center p-12 z-10">
                            <motion.h1 
                                className="text-5xl font-bold text-[#F5F0E9] mb-4 drop-shadow-lg"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {slides[currentSlide].title}
                            </motion.h1>
                            <motion.p 
                                className="text-xl text-[#E5DED3] drop-shadow-lg"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {slides[currentSlide].subtitle}
                            </motion.p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Controles de navegación */}
                <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
                    <Button
                        isIconOnly
                        className="bg-[#5D4837]/30 backdrop-blur-sm hover:bg-[#5D4837]/40 transition-all"
                        onClick={handlePrevSlide}
                    >
                        <ChevronLeft className="w-6 h-6 text-[#F5F0E9]" />
                    </Button>
                    <Button
                        isIconOnly
                        className="bg-[#5D4837]/30 backdrop-blur-sm hover:bg-[#5D4837]/40 transition-all"
                        onClick={handleNextSlide}
                    >
                        <ChevronRight className="w-6 h-6 text-[#F5F0E9]" />
                    </Button>
                </div>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentSlide ? 1 : -1);
                                setCurrentSlide(index);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'w-8 bg-[#F5F0E9]' 
                                    : 'w-2 bg-[#E5DED3]/50'
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="w-full py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#5D4837]">
                                Productos Destacados
                            </h2>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="text-[#8B6F4E] hover:text-[#5D4837] font-medium"
                                onClick={handleViewAll}
                            >
                                {showingAll ? 'Ver menos' : 'Ver todos'}
                            </motion.button>
                        </div>
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={displayCount}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                <ProductsGrid 
                                    products={products.slice(0, displayCount)}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <section>
                <FeaturesSection></FeaturesSection>
            </section>
        </div>
    );
};

export default HomePage;