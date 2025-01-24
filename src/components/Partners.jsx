import Marquee from "react-marquee-slider";
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
    amazonLogo,
    facebookLogo,
    googleLogo,
];

const Partners = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Nuestros Aliados Estratégicos</h2>
                <p className="text-gray-600 mt-2">Confían en nosotros marcas líderes a nivel mundial.</p>
            </div>
            <div className="w-full overflow-hidden">
                <Marquee velocity={25} resetAfterTries={100} scatterRandomly={false}>
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="h-16 object-contain mx-6"
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Partners;
