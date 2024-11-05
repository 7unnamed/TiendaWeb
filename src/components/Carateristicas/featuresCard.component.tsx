import { motion } from 'framer-motion';
import { Card } from '@nextui-org/react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
    icon, 
    title, 
    description, 
    index 
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center gap-4">
                    <span className="text-4xl">{icon}</span>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    </motion.div>
                    <p className="text-gray-600">{description}</p>
                </div>
            </Card>
        </motion.div>
    );
};