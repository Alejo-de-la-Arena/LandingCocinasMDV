import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; // Icono para ventajas
import CocinaHeroImg1 from "../assets/Images/Cocina-MDV.jpg";
import CocinaHeroImg2 from "../assets/Images/Cocina-MDV.jpg";
import CocinaHeroImg3 from "../assets/Images/Cocina-MDV.jpg";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [CocinaHeroImg1, CocinaHeroImg2, CocinaHeroImg3];

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="relative bg-gradient-to-b from-gray-100 via-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between min-h-[80vh] lg:min-h-screen lg:mt-16 mt-24">
                <motion.div
                    className="text-center lg:text-left max-w-lg lg:max-w-2xl space-y-5 mt-8 lg:mt-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-tight text-gray-900 max-w-xl ">
                        Cocinas de Diseño a <br /> Medida para Tu Hogar
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-xl text-left">
                        Diseñamos y fabricamos cocinas únicas, adaptadas a tus necesidades y estilo. Calidad y elegancia garantizadas.
                    </p>

                    {/* Ventajas */}
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700 icon">
                            <FaCheckCircle className="text-green-500" />
                            Materiales de alta calidad garantizados.
                        </li>
                        <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700 icon">
                            <FaCheckCircle className="text-green-500" />
                            Diseños adaptados a tu estilo.
                        </li>
                        <li className="flex items-center gap-2 text-sm sm:text-base text-gray-700 icon">
                            <FaCheckCircle className="text-green-500" />
                            Entrega puntual y atención personalizada.
                        </li>
                    </ul>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <button className="bg-black text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
                            Solicita Tu Cotización
                        </button>
                        <button className="border border-black text-black py-2 px-4 rounded-full text-sm font-medium hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300">
                            Descubre Más Diseños
                        </button>
                    </div>
                </motion.div>

                {/* Carousel */}
                <motion.div
                    className="relative mt-10 lg:mt-0 w-full max-w-lg lg:max-w-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Cocina ${index + 1}`}
                                className={`transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100" : "opacity-0 absolute top-0 left-0 w-full h-full"}`}
                            />
                        ))}
                    </div>
                    {/* Controles */}
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                        <button
                            onClick={handlePrevSlide}
                            className="bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-75 transition-all duration-300"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNextSlide}
                            className="bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-opacity-75 transition-all duration-300"
                        >
                            &gt;
                        </button>
                    </div>
                    {/* Indicadores */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`block w-3 h-3 rounded-full ${currentSlide === index ? "bg-black" : "bg-gray-400"} transition-all duration-300`}
                            ></span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
