import { motion } from 'framer-motion';
import { FeatureCard } from './featuresCard.component'
import { features } from '../../Data/features.data'

export const FeaturesSection = () => {
    return (
        <section className="w-full py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ¿Por qué elegir nuestros peluches?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre la magia de los animales peruanos en cada detalle de nuestros peluches artesanales
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} index={index} />
                    ))}
                </div>

                {/* Decorative element */}
                <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent -z-10"></div>
            </div>
        </section>
    );
};