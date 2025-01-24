import { useState } from "react";
import {
    FaHome,
    FaComments,
    FaPaintBrush,
    FaTools,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const steps = [
    {
        icon: <FaHome />,
        title: "Visitamos tu hogar o nuestro local",
        description:
            "Te ofrecemos la comodidad de elegir cómo querés comenzar: podés visitarnos en nuestro showroom o te visitamos en tu casa para analizar juntos el espacio.",
    },
    {
        icon: <FaComments />,
        title: "Conversamos y escuchamos tus ideas",
        description:
            "Nuestro equipo recopila todas tus ideas, necesidades y preferencias para garantizar un diseño personalizado que cumpla con tus expectativas.",
    },
    {
        icon: <FaPaintBrush />,
        title: "Creamos el diseño ideal",
        description:
            "Con tus ideas como base, diseñamos una propuesta única. Durante el proceso, trabajamos juntos para adaptarla y perfeccionarla.",
    },
    {
        icon: <FaTools />,
        title: "Fabricación e instalación",
        description:
            "Nuestro equipo se encarga de la fabricación en nuestros talleres. Además, garantizamos una instalación profesional y eficiente en tu hogar.",
    },
];

const HowItWorks = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [ref, inView] = useInView({ triggerOnce: true });

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            className="how-it-works bg-white py-16 px-6 lg:px-16"
            ref={ref}
        >
            <div className="container mx-auto max-w-5xl">
                <h2
                    className={`text-4xl font-bold text-center text-gray-800 mb-8 transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"
                        }`}
                >
                    Cómo Trabajamos
                </h2>
                <p className="text-center text-gray-600 text-lg mb-12">
                    Descubrí cómo llevamos a cabo cada proyecto, garantizando calidad, personalización y satisfacción en cada paso del proceso.
                </p>
                <div className="accordion space-y-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`accordion-item bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-1000 ${inView
                                    ? `opacity-100 translate-y-0 delay-${index * 200}`
                                    : "opacity-0 translate-y-10"
                                }`}
                        >
                            <button
                                className="accordion-header flex items-center justify-between w-full p-6 text-left text-gray-800 hover:bg-gray-100 transition-all"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="icon text-3xl hover:scale-125 transition-transform duration-300"
                                        style={{ color: "#96291C" }}
                                    >
                                        {step.icon}
                                    </div>
                                    <h3 className="font-medium text-lg">{step.title}</h3>
                                </div>
                                {activeIndex === index ? (
                                    <FaChevronUp className="text-gray-600" />
                                ) : (
                                    <FaChevronDown className="text-gray-600" />
                                )}
                            </button>
                            <div
                                className={`accordion-content overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[200px] p-6" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
