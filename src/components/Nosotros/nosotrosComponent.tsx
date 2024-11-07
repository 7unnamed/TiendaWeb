import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import ValoresSection from './Valorescomponent';
import nosotros from '../../assets/Nosotros.webp'
import HeroSection from './herocomponent';

const AboutUs = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-[#F5F0E9]">
            <HeroSection/>

            {/* Contenido Principal */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Historia */}
                    <motion.div
                        className="space-y-6"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-bold text-[#5D4837]">
                            Quiénes Somos
                        </h2>
                        <p className="text-[#7A614A] leading-relaxed">
                            En Munay Paq'ocha, nos dedicamos a preservar y compartir la rica tradición textil peruana a través de adorables peluches artesanales. Cada pieza que creamos es un testimonio del trabajo dedicado de nuestros artesanos, quienes utilizan técnicas ancestrales y materiales de la más alta calidad.
                        </p>
                        <p className="text-[#7A614A] leading-relaxed">
                            Nuestro compromiso va más allá de crear productos hermosos; buscamos mantener viva la herencia cultural de nuestros ancestros y apoyar a las comunidades locales que hacen posible nuestro trabajo.
                        </p>
                    </motion.div>

                    {/* Imagen decorativa o patrón */}
                    <motion.div
                        className="rounded-2xl overflow-hidden h-[400px]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-full h-full relative bg-[#5D4837]/10 backdrop-blur-sm rounded-2xl border border-[#8B6F4E]/20">
                            <img
                                src={nosotros} // Reemplaza con la ruta de tu imagen
                                alt="Artesanos trabajando en peluches"
                                className="w-full h-full object-cover rounded-2xl opacity-90"
                                style={{
                                    mixBlendMode: 'multiply'
                                }}
                            />
                            {/* Overlay sutil para mantener la estética */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#5D4837]/10 to-[#5D4837]/30 rounded-2xl" />
                        </div>
                    </motion.div>
                </div>

                {/* Misión y Visión */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {/* Misión */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B6F4E] to-[#5D4837] flex items-center justify-center">
                                <span className="text-2xl text-white">🎯</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#5D4837]">Misión</h3>
                        </div>
                        <p className="text-[#7A614A] leading-relaxed">
                            Crear peluches artesanales únicos que capturen la esencia de la tradición peruana,
                            promoviendo el trabajo artesanal de calidad y contribuyendo al desarrollo sostenible
                            de nuestras comunidades locales, mientras llevamos alegría y cultura a hogares de
                            todo el mundo.
                        </p>
                    </motion.div>

                    {/* Visión */}
                    <motion.div
                        className="bg-white p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4A5D3F] to-[#3D4E35] flex items-center justify-center">
                                <span className="text-2xl text-white">🌟</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#5D4837]">Visión</h3>
                        </div>
                        <p className="text-[#7A614A] leading-relaxed">
                            Ser reconocidos globalmente como la marca líder en peluches artesanales peruanos,
                            destacando por nuestra calidad, compromiso con la tradición y responsabilidad social,
                            inspirando a las futuras generaciones a valorar y preservar nuestro patrimonio cultural.
                        </p>
                    </motion.div>
                </div>

                {/* Valores o Principios */}
                <ValoresSection />

                {/* Call to Action */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Button
                        className="bg-gradient-to-r from-[#8B6F4E] to-[#5D4837] text-[#F5F0E9] px-8 py-6 rounded-xl"
                        size="lg"
                    >
                        Descubre Nuestros Productos
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutUs;