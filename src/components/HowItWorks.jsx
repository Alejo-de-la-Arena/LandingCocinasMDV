import { useState } from "react";
import { FaHome, FaComments, FaPaintBrush, FaTools, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const steps = [
    {
        icon: <FaHome />,
        title: "Nos podés visitar en nuestro local o te visitamos en tu casa",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        icon: <FaComments />,
        title: "Escuchamos todas tus ideas, lo que necesitás y lo que te gusta",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        icon: <FaPaintBrush />,
        title: "Diseñamos una propuesta y juntos la vamos adaptando y mejorando",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        icon: <FaTools />,
        title: "Lo fabricamos en nuestros talleres y lo instalamos nosotros mismos",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
            className="how-it-works bg-gray-50 py-12 px-6 lg:px-16"
            ref={ref}
        >
            <div className="container mx-auto max-w-4xl">
                <h2
                    className={`text-3xl font-bold text-center text-gray-800 mb-10 transition-opacity duration-1000 ${
                        inView ? "opacity-100" : "opacity-0"
                    }`}
                >
                    Cómo Trabajamos
                </h2>
                <div className="accordion space-y-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`accordion-item bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-1000 ${
                                inView
                                    ? `opacity-100 translate-y-0 delay-${index * 200}`
                                    : "opacity-0 translate-y-10"
                            }`}
                        >
                            <button
                                className="accordion-header flex items-center justify-between w-full p-6 text-left text-gray-800 hover:bg-gray-100 transition-all"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="icon text-2xl" style={{ color: "#96291C" }}>
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
                                className={`accordion-content overflow-hidden transition-all duration-300 ${
                                    activeIndex === index ? "max-h-[200px] p-6" : "max-h-0"
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
