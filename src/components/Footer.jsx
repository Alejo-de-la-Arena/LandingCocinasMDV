import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/images/mdv-logo-footer.jpeg";

const Footer = () => {
    return (
        <footer className="bg-black text-white font-sans py-12">
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
                {/* Logo y descripción */}
                <div className="col-span-1 flex flex-col">
                    <img src={logo} alt="MDV Proyectos Logo" className="w-32 mb-4" />
                    <p className="text-sm leading-relaxed max-w-3xl">
                        We offer a comprehensive suite of digital marketing services that cover all aspects
                        of your online presence. From SEO and social media marketing to content creation and
                        PPC advertising, we have the expertise to handle your diverse marketing needs.
                    </p>
                    {/* Redes sociales */}
                    <div className="flex items-center gap-4 mt-6">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="bg-white text-red-600 hover:text-red-800 rounded-full p-2 transition"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="bg-white text-red-600 hover:text-red-800 rounded-full p-2 transition"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="bg-white text-red-600 hover:text-red-800 rounded-full p-2 transition"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="bg-white text-red-600 hover:text-red-800 rounded-full p-2 transition"
                        >
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Licence */}
                <div className="col-span-1 flex flex-col space-y-3 lg:ml-20">
                    <h2 className="text-lg font-bold mb-4">Licence</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 transition">Copyright</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 transition">Terms of Service</a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="col-span-1 flex flex-col space-y-3">
                    <h2 className="text-lg font-bold mb-4">Contact</h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <MdPhone className="text-red-600" size={20} />
                            (406) 555-0120
                        </li>
                        <li className="flex items-center gap-2">
                            <MdEmail className="text-red-600" size={20} />
                            Hey@boostim.com
                        </li>
                        <li className="flex items-center gap-2">
                            <MdLocationOn className="text-red-600" size={20} />
                            2972 Westheimer Rd. Santa Ana, Illinois 85486
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="col-span-1 flex flex-col space-y-3 lg:ml-20">
                    <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-gray-400 transition">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 transition">Services</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 transition">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 transition">Careers</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} MDV Proyectos. Todos los Derechos Reservados.
            </div>
        </footer>
    );
};

export default Footer;
