import { motion } from 'framer-motion';
import nosotros from '../../assets/Nosotros.webp';

const HeroSection = () => {
    return (
        <section className="relative h-[500px] overflow-hidden">
            {/* Imagen de fondo con efecto parallax */}
            <motion.div 
                className="absolute inset-0 w-full h-full"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            >
                <img 
                    src={nosotros}
                    alt="Paisaje andino"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Capas de gradiente decorativas */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B6F4E]/90 via-[#7A614A]/80 to-[#5D4837]/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5D4837]/50 via-transparent to-transparent" />

            {/* Elementos decorativos */}
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#8B6F4E]/20 rounded-full blur-xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#4A5D3F]/20 rounded-full blur-xl" />
            </motion.div>

            {/* Contenido principal */}
            <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
                <div className="max-w-3xl">
                    {/* Texto decorativo de fondo */}
                    <motion.div
                        className="absolute -top-10 left-0 text-[120px] font-bold text-[#8B6F4E]/10"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        MUNAY
                    </motion.div>

                    {/* Título principal con animación de escritura */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-[#F5F0E9] mb-6 relative"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Nuestra Historia
                        <motion.div 
                            className="absolute -bottom-2 left-0 h-1 bg-[#4A5D3F]"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 1 }}
                        />
                    </motion.h1>

                    {/* Subtítulo con efecto de aparición gradual */}
                    <motion.p
                        className="text-xl md:text-2xl text-[#E5DED3] max-w-2xl relative pl-6 border-l-4 border-[#4A5D3F]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            Artesanía peruana con amor y tradición
                        </motion.span>
                    </motion.p>

                    {/* Elemento decorativo adicional */}
                    <motion.div
                        className="absolute -bottom-10 right-0 flex gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        {[1, 2, 3].map((_, index) => (
                            <div 
                                key={index}
                                className="w-2 h-2 rounded-full bg-[#4A5D3F]"
                                style={{ opacity: 1 - (index * 0.3) }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            
        </section>
    );
};

export default HeroSection;