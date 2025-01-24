import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        message: `"El servicio fue excepcional, superó todas mis expectativas. Estoy muy agradecido por su profesionalismo y dedicación."`,
        image: "https://via.placeholder.com/80", // Reemplaza con las URLs reales.
        name: "Juan Pérez",
        vocation: "CEO de Basecamp Corp",
    },
    {
        message: `"Trabajar con este equipo fue una experiencia increíble. La atención al detalle es insuperable."`,
        image: "https://via.placeholder.com/80",
        name: "María López",
        vocation: "Fundadora de Creative Minds",
    },
    {
        message: `"No podría estar más contento con el resultado final. Definitivamente recomendaré sus servicios a otros."`,
        image: "https://via.placeholder.com/80",
        name: "Carlos Sánchez",
        vocation: "Gerente de Innovación en TechWave",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true });

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section
            className="testimonials py-16 px-6 lg:px-16 bg-gradient-to-b from-gray-100 via-white to-gray-50"
            ref={ref}
        >
            <div className="container mx-auto max-w-4xl relative text-center">
                {/* Title and Subtitle */}
                <div className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        Nuestros Testimonios
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Historias reales de éxito con nuestro servicio
                    </p>
                </div>

                {/* Testimonial Text */}
                <div
                    className={`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <p className="text-2xl italic text-gray-800 leading-relaxed mb-10">
                        {testimonials[currentIndex].message}
                    </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full border-2 border-gray-300"
                    />
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                            {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-gray-500">
                            {testimonials[currentIndex].vocation}
                        </p>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-4 justify-center mt-10">
                    <button
                        className="border border-black text-black py-2 px-4 sm:px-6 rounded-full font-medium text-sm sm:text-base hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300"
                        onClick={prevTestimonial}
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <span className="text-sm text-gray-600 font-medium">
                        {`${String(currentIndex + 1).padStart(2, "0")}/${String(
                            testimonials.length
                        ).padStart(2, "0")}`}
                    </span>
                    <button
                        className="border border-black bg-black text-white py-2 px-4 sm:px-6 rounded-full font-medium text-sm sm:text-base hover:bg-gray-800 hover:text-white hover:shadow-lg transition-all duration-300"
                        onClick={nextTestimonial}
                    >
                        <FaChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
