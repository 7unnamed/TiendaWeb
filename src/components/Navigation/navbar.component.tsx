import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarItem,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { IUser } from "../../model/Usuario/user.model";
import type { ICart } from "../../model/Carrito/carrito.model";
import logo from '../../assets/Logo.svg'

interface NavbarProps {
    user?: IUser | null;
    cart?: ICart | null;
}

export const AppNavbar: React.FC<NavbarProps> = () => {
    const [activeLink, setActiveLink] = React.useState("/");

    const underlineVariants = {
        hidden: { width: 0 },
        visible: { width: "100%" },
    };

    return (
        <Navbar
            className="bg-gradient-to-r from-[#5D4837] via-[#4A3C2F] to-[#5D4837] border-none relative"
            maxWidth="full"
        >
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/5" /> {/* Línea sutil de brillo */}
            <div className="absolute inset-x-0 -bottom-4 h-4 bg-gradient-to-b from-[#5D4837]/30 via-[#5D4837]/10 to-transparent" />
            <div className="absolute inset-x-0 -bottom-8 h-8 bg-gradient-to-b from-[#5D4837]/10 to-transparent blur-sm" />

            <div className="flex w-full items-center justify-between px-4 lg:px-8">
                {/* Logo */}
                <NavbarBrand className="flex items-center space-x-4">
                    <Link
                        to="/"
                        className="flex items-center"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-14 w-auto object-contain" // Tamaño ajustado
                        />
                        <span className="hidden md:block text-white text-lg font-semibold pl-3">
                            Munay Paq'ocha
                        </span>
                    </Link>
                </NavbarBrand>


                {/* Navigation + Actions */}
                <div className="flex items-center gap-8">
                    {/* Navigation Links */}
                    <nav className="flex items-center gap-6">
                        {[
                            { name: "Inicio", path: "/" },
                            { name: "Productos", path: "/producto" },
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

                </div>
            </div>
        </Navbar>
    );
};

export default AppNavbar;