import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="ABIC Logo" className="h-12 w-auto" />
                    <div className={`flex flex-col ${isScrolled ? 'text-abic-blue' : 'text-white'}`}>
                        <span className="font-montserrat font-bold text-lg leading-tight tracking-wide">ABIC</span>
                        <span className="text-[10px] uppercase tracking-widest opacity-80">Immigration Inc.</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Home", "About", "Services", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-sm font-bold uppercase tracking-widest hover:text-abic-gold transition-colors ${isScrolled ? "text-abic-blue" : "text-white"
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2.5 bg-abic-red text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-red-700 transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-0.5"
                    >
                        Book Consultation
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-abic-blue"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-abic-blue" : "text-white"} />}
                </button>
            </div>
        </header>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-abic-blue text-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="space-y-4">
                    <img src="/logo.png" alt="ABIC Logo" className="h-16 w-auto brightness-0 invert" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Above & Beyond Immigration Consultants. Professional, certified, and dedicated to your Canadian dream.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-abic-gold font-bold uppercase tracking-widest mb-6 text-sm">Navigation</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        {['Home', 'About Us', 'Immigration Services', 'Assessment', 'Contact'].map(item => (
                            <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-abic-gold font-bold uppercase tracking-widest mb-6 text-sm">Contact</h4>
                    <ul className="space-y-4 text-sm text-gray-300">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-white shrink-0 mt-1" />
                            <span>Dixie Park Mall, 1550 South Gateway Rd., Unit 318, Mississauga ON</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-white shrink-0" />
                            <a href="tel:+14163338110">+1 (416) 333 8110</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-white shrink-0" />
                            <a href="mailto:info@abicrcic.ca">info@abicrcic.ca</a>
                        </li>
                    </ul>
                </div>

                {/* Certifications (Placeholders for now) */}
                <div>
                    <h4 className="text-abic-gold font-bold uppercase tracking-widest mb-6 text-sm">Certified By</h4>
                    <div className="flex gap-4 opacity-80">
                        {/* Will add RCIC logo here later */}
                        <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center text-xs">RCIC</div>
                        <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center text-xs">CAPIC</div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-xs text-center text-gray-400">
                &copy; 2026 ABIC Immigration Inc. All Rights Reserved.
            </div>
        </footer>
    )
}
