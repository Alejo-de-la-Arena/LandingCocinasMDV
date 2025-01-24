import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Newsletter = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setMessage({ type: "error", text: "Por favor, introduce un email válido." });
            return;
        }
        setTimeout(() => {
            setMessage({ type: "success", text: "¡Te has suscrito correctamente!" });
            setEmail("");
        }, 1000);
    };

    return (
        <section
            ref={ref}
            className="relative flex items-center justify-center py-8 px-4 sm:px-6 md:px-12 overflow-hidden font-sans"
        >
            {/* Fondo animado con Particles */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: "#000000" },
                    fpsLimit: 60,
                    particles: {
                        number: { value: 80, density: { enable: true, area: 800 } },
                        color: { value: "#000000" },
                        shape: { type: "circle" },
                        opacity: { value: 1 },
                        size: { value: { min: 1, max: 5 } },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            outModes: { default: "out" },
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" },
                        },
                        modes: {
                            repulse: { distance: 100 },
                            push: { quantity: 4 },
                        },
                    },
                }}
                className="absolute inset-0 z-0"
            />

            {/* Contenido del Newsletter */}
            <motion.div
                className="relative w-full max-w-4xl mx-auto h-96 rounded-[30px] overflow-hidden shadow-lg flex items-center justify-center bg-black bg-opacity-85 backdrop-blur-md "
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative z-10 text-centertext-white px-8 flex flex-col items-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4 text-white"
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
                        className="text-sm sm:text-base md:text-lg mb-6 w-3/4 text-white"
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
                        className="flex items-center w-full max-w-lg mx-auto relative bg-white rounded-md shadow-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        onSubmit={handleSubmit}
                    >
                        <motion.input
                            type="email"
                            placeholder="Ingresa tu email"
                            className="flex-grow py-3 px-4 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            whileFocus={{ scale: 1.05 }}
                        />
                        <motion.button
                            type="submit"
                            className="absolute right-2 top-1.5 bottom-1.5 bg-black text-white font-bold px-4 hover:bg-gray-800 transition-all duration-300 rounded-sm"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Suscribirse
                        </motion.button>
                    </motion.form>
                    {message && (
                        <p
                            className={`mt-4 text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {message.text}
                        </p>
                    )}
                    <p className="text-gray-400 text-sm text-center mt-4">
                        Nunca te enviaremos spam. Respetamos tu privacidad.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Newsletter;
