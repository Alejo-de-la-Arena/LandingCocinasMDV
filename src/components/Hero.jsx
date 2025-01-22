import { useState } from "react";
import { motion } from "framer-motion"; 
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
        <section className="relative bg-white overflow-hidden mt-24 sm:mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between min-h-[80vh] lg:min-h-screen">
                <motion.div
                    className="text-center lg:text-left max-w-lg lg:max-w-2xl space-y-5 mt-8 lg:mt-0"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-3xl sm:text-4xl  lg:text-[2.5rem] font-bold leading-tight text-gray-900">
                        Stay ahead of the curve <br /> with our forward-thinking
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600">
                        An award-winning SEO agency with disciplines in digital marketing, design, and website development. Focused on understanding you.
                    </p>
                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <button className="bg-black text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
                            Contáctanos
                        </button>
                        <button className="border border-black text-black py-2 px-4 rounded-full text-sm font-medium hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300">
                            Descubre Más
                        </button>
                    </div>
                </motion.div>

                {/* Carousel */}
                <motion.div
                    className="relative mt-10 lg:mt-0 w-full max-w-lg lg:max-w-xl"
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
