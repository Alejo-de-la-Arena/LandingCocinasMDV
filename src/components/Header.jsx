import { BsBell } from "react-icons/bs";
import MDVLogo from "../assets/Images/MDV-PROYECTOS-LOGO.webp";

const Header = () => {
    const handleContactClick = () => {
        const whatsappNumber = "123456789"; // Cambia este número por el tuyo
        window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    };

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <img src={MDVLogo} alt="MDV Proyectos Logo" className="w-16 sm:w-20 h-auto" />

                {/* Botones */}
                <div className="flex gap-3 sm:gap-4 items-center">
                    {/* Botón Contáctanos */}
                    <button
                        onClick={handleContactClick}
                        className="border border-black text-black py-2 px-4 sm:px-6 rounded-full font-medium text-sm sm:text-base hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300"
                    >
                        Contáctanos
                    </button>

                    {/* Botón Notificaciones */}
                    <button className="bg-black text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300">
                        <BsBell className="text-base sm:text-lg" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
