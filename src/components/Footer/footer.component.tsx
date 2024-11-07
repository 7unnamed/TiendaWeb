import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Input } from "@nextui-org/react";
import { Instagram, Facebook, Twitter, Send, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="bg-[#5D4837]">
            <motion.div
                className="container mx-auto px-4 py-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Sobre Nosotros */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3 className="text-2xl font-bold text-[#F5F0E9] mb-4">Munay Paq'ocha</h3>
                        <p className="text-[#E5DED3]">
                            Llevamos la magia de los animales peruanos a tu hogar con nuestros adorables peluches artesanales.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            {['instagram', 'facebook', 'twitter'].map((social) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-[#E5DED3] hover:text-[#F5F0E9] transition-colors"
                                >
                                    {social === 'instagram' && <Instagram size={24} />}
                                    {social === 'facebook' && <Facebook size={24} />}
                                    {social === 'twitter' && <Twitter size={24} />}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Rápidos */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h4 className="text-lg font-semibold text-[#F5F0E9]">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Inicio', path: '/' },
                                { name: 'Productos', path: '/productos' },
                                { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
                                { name: 'Contacto', path: '/contacto' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-[#E5DED3] hover:text-[#F5F0E9] transition-colors inline-block"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contacto */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h4 className="text-lg font-semibold text-[#F5F0E9]">Contacto</h4>
                        <ul className="space-y-3">
                            {[
                                { icon: <MapPin size={18} />, text: 'Lima, Perú' },
                                { icon: <Phone size={18} />, text: '+51 997 550 552' },
                                { icon: <Mail size={18} />, text: 'info@munaypaqocha.pe' }
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-[#E5DED3]">
                                    <span className="text-[#8B6F4E]">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h4 className="text-xl font-semibold text-[#F5F0E9]">Newsletter</h4>
                        <p className="text-[#E5DED3] text-sm">
                            Suscríbete para recibir noticias y ofertas especiales.
                        </p>
                        <div className="space-y-2 mt-4">
                            <Input
                                type="email"
                                placeholder="Tu email"
                                classNames={{
                                    base: "max-w-full",
                                    mainWrapper: "h-full",
                                    input: "text-[#5D4837] bg-[#F5F0E9]/90 placeholder:text-[#8B6F4E]/70",
                                    inputWrapper: [
                                        "bg-[#F5F0E9]/90",
                                        "hover:bg-[#F5F0E9]",
                                        "group-data-[focused=true]:bg-[#F5F0E9]",
                                        "!cursor-text",
                                        "h-11",
                                        "rounded-md",
                                        "border-none",
                                        "shadow-sm",
                                    ].join(" "),
                                }}
                            />
                            <Button
                                endContent={<Send className="h-4 w-4" />}
                                className="flex justify-center items-center w-full h-11 bg-[#4A5D3F] text-[#F5F0E9] hover:bg-[#3D4E35] transition-colors rounded-md font-medium shadow-sm"
                            >
                                Suscribirse
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    variants={itemVariants}
                    className="border-t border-[#8B6F4E]/30 mt-12 pt-8 text-center text-[#E5DED3]"
                >
                    <p>© {new Date().getFullYear()} Munay Paq'ocha. Todos los derechos reservados.</p>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;