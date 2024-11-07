import { motion } from 'framer-motion';

const ValoresSection = () => {
    const valores = [
        {
            icon: "🤝",
            title: "Autenticidad",
            description: "Creamos piezas únicas que reflejan nuestra verdadera esencia peruana",
            color: "from-[#FFB938] to-[#FD841F]",
            delay: 0
        },
        {
            icon: "💝",
            title: "Compromiso",
            description: "Dedicados a la excelencia y al bienestar de nuestras comunidades",
            color: "from-[#FF7171] to-[#E63946]",
            delay: 0.2
        },
        {
            icon: "✨",
            title: "Calidad",
            description: "Productos excepcionales que superan las expectativas",
            color: "from-[#FFD93D] to-[#F4C430]",
            delay: 0.4
        },
        {
            icon: "🌿",
            title: "Sostenibilidad",
            description: "Comprometidos con el medio ambiente y el futuro de nuestro Perú",
            color: "from-[#95CD41] to-[#4E944F]",
            delay: 0.6
        }
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <section className="py-20 bg-[#F5F0E9]">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-[#5D4837] mb-4">
                    Nuestros Valores
                </h2>
                <p className="text-[#7A614A] text-lg max-w-2xl mx-auto">
                    Los pilares que guían nuestro compromiso con la artesanía peruana
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {valores.map((valor, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl">
                            <div className={`w-full h-full bg-gradient-to-r ${valor.color}`}></div>
                        </div>

                        <div className="relative bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:translate-y-[-10px]">
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className="text-6xl mb-6 mx-auto"
                            >
                                {valor.icon}
                            </motion.div>

                            <h3 className="text-2xl font-bold text-[#5D4837] mb-4">
                                {valor.title}
                            </h3>

                            <p className="text-[#7A614A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {valor.description}
                            </p>

                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: valor.delay }}
                            >
                                <div className={`h-full bg-gradient-to-r ${valor.color} rounded-full`}></div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ValoresSection;