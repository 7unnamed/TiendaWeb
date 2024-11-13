import React from "react";
import { AppNavbar } from "../components/Navigation/navbar.component";
import { Footer } from '../components/Footer/footer.component'
import WhatsAppButton from "../components/Navigation/Whatsapp.component";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <AppNavbar />
            <main className="flex-grow">
                <div className="container mx-auto px-4 py-8">{children}</div>
            </main>
            <Footer/>
            <WhatsAppButton/>
        </div>
    );
};
