import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import CICCBadge from "./CICCBadge";
import { AnimatePresence, motion } from "framer-motion";

// --- TOP UTILITY BAR ---
const TopUtilityBar = () => (
    <div className="bg-abic-blue text-white py-2 px-4 text-sm hidden md:block border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
            {/* Social Icons - Top Left */}
            <div className="flex space-x-4 items-center">
                <a href="https://www.facebook.com/abicrcic/" target="_blank" rel="noopener noreferrer" className="hover:text-abic-gold transition-colors" aria-label="Facebook">
                    <Facebook size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-abic-gold transition-colors" aria-label="Instagram">
                    <Instagram size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-abic-gold transition-colors" aria-label="Twitter">
                    <Twitter size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-abic-gold transition-colors" aria-label="LinkedIn">
                    <Linkedin size={16} />
                </a>
                <a href="https://www.youtube.com/watch?v=JUKfqThwvHw" target="_blank" rel="noopener noreferrer" className="hover:text-abic-gold transition-colors" aria-label="YouTube">
                    <Youtube size={16} />
                </a>
            </div>

            {/* Language / Contact - Top Right */}
            <div className="flex space-x-6">
                <a href="mailto:info@abicimmigration.com" className="hover:text-abic-gold flex items-center gap-2">
                    <Mail size={14} /> info@abicimmigration.com
                </a>
                <a href="tel:+14163338110" className="hover:text-abic-gold flex items-center gap-2 font-bold">
                    <Phone size={14} /> +1 (416) 333-8110
                </a>
            </div>
        </div>
    </div>
);

// --- MAIN NAVIGATION ---
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks: { name: string; path: string; label?: string }[] = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about/our-practice" },
        { name: "Services", path: "/services" },
        { name: "Students", path: "/students" },
        { name: "Consultation", path: "/fees" },
        { name: "Resources", path: "/resources" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`sticky top - 0 z - 50 transition - all duration - 300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"} `}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img src={`${import.meta.env.BASE_URL}assets/logo-full.png`} alt="ABIC Logo" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative text-sm uppercase tracking-wide hover:text-abic-blue transition-colors group ${location.pathname === link.path ? "text-abic-blue font-bold" : ""} `}
                        >
                            {link.name}
                            {link.label && (
                                <span className="absolute -top-3 -right-2 text-[9px] bg-abic-gold text-white px-1.5 py-0.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                    {link.label}
                                </span>
                            )}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-abic-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? "w-full" : ""} `}></span>
                        </Link>
                    ))}
                    <Link to="/contact" className="bg-abic-blue text-white px-5 py-2 rounded-full font-bold hover:bg-abic-blue/90 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap">
                        Book Now
                    </Link>

                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4 ml-6">
                        <a href="https://www.facebook.com/abicrcic/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-abic-blue transition-colors" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-abic-blue transition-colors" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-abic-blue transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.youtube.com/watch?v=JUKfqThwvHw" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-abic-blue transition-colors" aria-label="YouTube">
                            <Youtube size={20} />
                        </a>

                        {/* Google Translate */}
                        <div id="google_translate_element" className="ml-2"></div>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 flex justify-between items-center"
                                >
                                    {link.name}
                                    {link.label && <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">{link.label}</span>}
                                </Link>
                            ))}
                            <Link to="/contact" className="bg-abic-blue text-white text-center py-4 rounded-xl font-bold mt-4 shadow-md">
                                Book Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// --- FOOTER ---
export const Footer = () => (
    <footer className="bg-gray-900 text-white/80 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                {/* Brand & Social */}
                <div className="space-y-6">
                    <img src={`${import.meta.env.BASE_URL}assets/logo-full.png`} alt="ABIC Logo" className="h-12 brightness-0 invert opacity-90" />
                    <p className="text-sm leading-relaxed max-w-xs">
                        Regulated Canadian Immigration Consultants (RCIC). Providing ethical, accurate, and compliance-driven immigration strategies since 2017.
                    </p>
                    {/* CICC Badge */}
                    <CICCBadge size="md" showLabel variant="grayscale" />
                </div>

                {/* Locations */}
                {/* Locations with Maps */}
                <div className="col-span-2 grid md:grid-cols-3 gap-8">
                    {/* Mississauga */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                            <MapPin size={16} className="text-abic-gold" /> Mississauga
                        </h4>
                        <div className="h-32 w-full rounded-lg overflow-hidden bg-gray-800 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.8767223727!2d-79.6200223237894!3d43.58525297110543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b472e3828977d%3A0x6a0a3820257743d!2s130%20Dundas%20St%20E%20%23303%2C%20Mississauga%2C%20ON%20L5A%203V8!5e0!3m2!1sen!2sca!4v1709669000000!5m2!1sen!2sca"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                            ></iframe>
                        </div>
                        <p className="text-xs text-gray-400">
                            7111 Syntex Drive, 3rd Floor<br />Mississauga, ON L5N 8C3
                        </p>
                    </div>

                    {/* Waterloo */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                            <MapPin size={16} className="text-abic-gold" /> Waterloo
                        </h4>
                        <div className="h-32 w-full rounded-lg overflow-hidden bg-gray-800 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.439569032766!2d-80.53757782379564!3d43.49847197111056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b535891396f27%3A0xe9ae04866b170c2f!2s180%20Northfield%20Dr%20W%2C%20Waterloo%2C%20ON!5e0!3m2!1sen!2sca!4v1709669000000!5m2!1sen!2sca"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                            ></iframe>
                        </div>
                        <p className="text-xs text-gray-400">
                            180 Northfield Dr W<br />Waterloo, ON
                        </p>
                    </div>

                    {/* Guelph */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                            <MapPin size={16} className="text-abic-gold" /> Guelph
                        </h4>
                        <div className="h-32 w-full rounded-lg overflow-hidden bg-gray-800 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.8767223727!2d-80.2481669237894!3d43.54525297110543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9ad7c9f87c7d%3A0x1234567890abcdef!2s2%20Wyndham%20St%20N%2C%20Guelph%2C%20ON!5e0!3m2!1sen!2sca!4v1709669000000!5m2!1sen!2sca"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                            ></iframe>
                        </div>
                        <p className="text-xs text-gray-400">
                            2 Wyndham St N<br />Guelph, ON N1H 4E3
                        </p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm">Legal & Policies</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                        <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund & No-Show Policy</Link></li>
                        <li><a href="https://college-ic.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">CICC Compliance <ExternalLink size={12} /></a></li>
                    </ul>
                </div>
            </div>

            {/* Disclaimer & Copyright */}
            <div className="pt-8 border-t border-gray-800 text-xs text-center space-y-4">
                <p className="max-w-4xl mx-auto opacity-60">
                    **AI Assistance Disclaimer**: Technology-assisted tools may support preliminary paperwork; all advice and final work are reviewed and delivered under the responsibility of a licensed RCIC.
                </p>
                <p className="opacity-60">
                    &copy; {new Date().getFullYear()} Above & Beyond Immigration Consultants. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
);

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
            <TopUtilityBar />
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
