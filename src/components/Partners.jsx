import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import amazonLogo from "../assets/Logos/icons8-amazonas.svg";
import facebookLogo from "../assets/Logos/icons8-facebook-nuevo.svg";
import googleLogo from "../assets/Logos/icons8-logo-de-google.svg";
import macLogo from "../assets/Logos/icons8-mac-os.svg";
import microsoftLogo from "../assets/Logos/icons8-microsoft.svg";
import nikeLogo from "../assets/Logos/icons8-nike.svg";
import teslaLogo from "../assets/Logos/icons8-tesla-logo-filled.svg";
import youtubeLogo from "../assets/Logos/icons8-youtube-play.svg";

const logos = [
    amazonLogo,
    facebookLogo,
    googleLogo,
    macLogo,
    microsoftLogo,
    nikeLogo,
    teslaLogo,
    youtubeLogo,
];

const Partners = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section
            ref={ref}
            className="py-16 bg-gray-100 overflow-hidden relative flex flex-col items-center"
        >
            {/* Contenedor de los logos */}
            <div className="relative w-full">
                <div className="flex items-center justify-center space-x-12">
                    {logos.map((logo, index) => (
                        <motion.img
                            key={index}
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="h-16 object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
