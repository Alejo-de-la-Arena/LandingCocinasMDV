import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import backgroundImage from "../assets/images/blackBG.jpg";

const Newsletter = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section
            ref={ref}
            className="newsletter-section py-8 px-4 sm:px-6 md:px-12 flex justify-center items-center bg-white font-sans"
        >
            <motion.div
                className="relative w-full max-w-4xl mx-auto h-80 sm:h-96 md:h-[28rem] rounded-[30px] overflow-hidden shadow-lg flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div
                        className="absolute inset-0 bg-black/40"
                        style={{ filter: "blur(10px)" }} // Blur solo en la imagen y overlay
                    ></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-8 flex flex-col items-center justify-center">
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sans"
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Regístrate Ahora
                    </motion.h2>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg mb-6 font-sans w-3/4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Sé el primero en enterarte de nuestras últimas actualizaciones y promociones exclusivas.
                    </motion.p>
                    <motion.form
                        className="flex items-center w-full max-w-lg mx-auto relative bg-white rounded-md overflow-hidden shadow-lg font-sans"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <input
                            type="email"
                            placeholder="Ingresa tu email"
                            className="flex-grow py-3 px-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none font-sans"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1.5 bottom-1.5 bg-black text-white font-bold px-4 hover:bg-gray-800 transition-all duration-300 rounded-sm font-sans"
                        >
                            Suscribirse
                        </button>
                    </motion.form>
                    <p className="text-gray-400 text-sm text-center mt-4 font-sans">
                        Nunca te enviaremos spam. Respetamos tu privacidad.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Newsletter;
