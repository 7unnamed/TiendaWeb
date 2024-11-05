import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarItem,
} from "@nextui-org/react";
import { ShoppingCart, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { IUser } from "../../model/Usuario/user.model";
import type { ICart } from "../../model/Carrito/carrito.model";
import logo from '../../assets/Logo.svg'

interface NavbarProps {
    user?: IUser | null;
    cart?: ICart | null;
}

export const AppNavbar: React.FC<NavbarProps> = ({ cart }) => {
    const [activeLink, setActiveLink] = React.useState("/");

    const underlineVariants = {
        hidden: { width: 0 },
        visible: { width: "100%" },
    };

    return (
        <Navbar 
            className="bg-[#8B6F4E] border-none"
            maxWidth="full"
        >
            <div className="flex w-full items-center justify-between px-4 lg:px-8">
                {/* Logo */}
                <NavbarBrand className="flex items-center">
                    <Link
                        to="/"
                        className="flex items-center"
                    >
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className="h-14 w-auto object-contain" // Ajustamos el tamaño aquí
                        />
                    </Link>
                </NavbarBrand>

                {/* Navigation + Actions */}
                <div className="flex items-center gap-8">
                    {/* Navigation Links */}
                    <nav className="flex items-center gap-6">
                        {[
                            { name: "Inicio", path: "/" },
                            { name: "Nosotros", path: "/nosotros" },
                        ].map(({ name, path }) => (
                            <NavbarItem key={path} className="relative list-none">
                                <Link
                                    to={path}
                                    className="text-[#F5F0E9] hover:text-[#E5DED3] transition-colors py-2"
                                    onMouseEnter={() => setActiveLink(path)}
                                    onMouseLeave={() => setActiveLink("/")}
                                >
                                    {name}
                                    {activeLink === path && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-[#E5DED3]"
                                            initial="hidden"
                                            animate="visible"
                                            variants={underlineVariants}
                                            transition={{ duration: 0.2 }}
                                        />
                                    )}
                                </Link>
                            </NavbarItem>
                        ))}
                    </nav>

                    {/* Action Icons */}
                    <div className="flex items-center gap-6">
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            <Link to="/wishlist" className="text-[#F5F0E9] hover:text-[#E5DED3]">
                                <Heart className="stroke-2" size={22} />
                                <span className="absolute -top-2 -right-2 bg-[#4A5D3F] text-[#F5F0E9] text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                                    0
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            <Link to="/cart" className="text-[#F5F0E9] hover:text-[#E5DED3]">
                                <ShoppingCart className="stroke-2" size={22} />
                                <span className="absolute -top-2 -right-2 bg-[#4A5D3F] text-[#F5F0E9] text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                                    {cart?.totalItems || 0}
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Navbar>
    );
};

export default AppNavbar;