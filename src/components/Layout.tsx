import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, ChevronDown, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = location.pathname === '/';
    const isSolid = !isHome || isScrolled;

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isSolid
                ? "bg-white/95 backdrop-blur-xl border-white/20 shadow-sm py-3"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center">

                {/* --- LOGO --- */}
                <Link to="/" className="relative z-50 flex items-center gap-3 group">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative"
                    >
                        <img
                            src="/assets/logo-full.png"
                            alt="ABIC Immigration"
                            className={`h-12 md:h-14 w-auto object-contain transition-all duration-500 transform ${isSolid ? '' : 'brightness-0 invert'}`}
                        />
                    </motion.div>
                </Link>

                {/* --- DESKTOP NAV --- */}
                <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2">

                    {/* Home Dropdown */}
                    <Dropdown
                        label="Home"
                        isSolid={isSolid}
                        isOpen={activeDropdown === 'home'}
                        onMouseEnter={() => setActiveDropdown('home')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="w-64 p-3">
                            <DropdownItem to="/" title="Overview" />
                            <DropdownItem to="/why-choose-abic" title="Why Choose ABIC" />
                            <DropdownItem to="/services-overview" title="Our Services at a Glance" />
                            <DropdownItem to="/contact" title="Social & Contact Links" />
                        </div>
                    </Dropdown>

                    {/* About Dropdown */}
                    <Dropdown
                        label="About Us"
                        isSolid={isSolid}
                        isOpen={activeDropdown === 'about'}
                        onMouseEnter={() => setActiveDropdown('about')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="w-72 p-3">
                            <DropdownItem to="/about" title="Our Practice" />
                            <DropdownItem to="/about/credentials" title="RCIC Credentials" />
                            <DropdownItem to="/about/verify-status" title="Verify RCIC Status" />
                            <DropdownItem to="/about/reviews" title="Client Reviews & Testimonials" />
                            <DropdownItem to="/about/ethics" title="Ethics & Professional Standards" />
                        </div>
                    </Dropdown>

                    {/* Services Dropdown */}
                    <Dropdown
                        label="Services"
                        isSolid={isSolid}
                        isOpen={activeDropdown === 'services'}
                        onMouseEnter={() => setActiveDropdown('services')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="grid grid-cols-3 gap-8 w-[800px] p-6">
                            <div className="space-y-4">
                                <DropdownSection title="Temporary Status">
                                    <DropdownItem to="/visitor-visa/application" title="Visitor Visa" />
                                    <DropdownItem to="/study-in-canada/application" title="Study in Canada" />
                                    <DropdownItem to="/work-permit/overview" title="Work Permit" />
                                </DropdownSection>
                                <DropdownSection title="Express Entry">
                                    <DropdownItem to="/express-entry/fsw" title="Federal Skilled Worker (FSW)" />
                                    <DropdownItem to="/express-entry/cec" title="Canadian Experience Class (CEC)" />
                                    <DropdownItem to="/express-entry/fst" title="Federal Skilled Trades (FST)" />
                                </DropdownSection>
                            </div>
                            <div className="space-y-4">
                                <DropdownSection title="Family Sponsorship">
                                    <DropdownItem to="/family-sponsorship/spousal" title="Spousal Sponsorship" />
                                    <DropdownItem to="/family-sponsorship/common-law" title="Common-Law Partner" />
                                    <DropdownItem to="/family-sponsorship/same-sex" title="Same-Sex Sponsorship" />
                                </DropdownSection>
                                <DropdownSection title="PR & Citizenship">
                                    <DropdownItem to="/pr-citizenship/pr" title="Permanent Residence" />
                                    <DropdownItem to="/pr-citizenship/citizenship" title="Canadian Citizenship" />
                                </DropdownSection>
                            </div>
                            <div className="space-y-4">
                                <DropdownSection title="Employers">
                                    <DropdownItem to="/employers-lmia/process" title="LMIA Process" />
                                    <DropdownItem to="/employers-lmia/recruitment" title="Recruitment" />
                                    <DropdownItem to="/employers-lmia/compliance" title="Compliance" />
                                </DropdownSection>
                            </div>
                        </div>
                    </Dropdown>

                    {/* Students Dropdown */}
                    <Dropdown
                        label="Students"
                        isSolid={isSolid}
                        isOpen={activeDropdown === 'students'}
                        onMouseEnter={() => setActiveDropdown('students')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="grid grid-cols-2 gap-8 w-[600px] p-6">
                            <DropdownSection title="Waterloo Region">
                                <DropdownItem to="/students/waterloo/overview" title="Overview & Consultation" />
                                <DropdownItem to="/students/waterloo/study-permit" title="Study Permit" />
                                <DropdownItem to="/students/waterloo/extension" title="Extension" />
                                <DropdownItem to="/students/waterloo/pgwp" title="PGWP" />
                                <DropdownItem to="/students/waterloo/work-while-studying" title="Work While Studying" />
                                <DropdownItem to="/students/waterloo/refusals" title="Refusals" />
                                <DropdownItem to="/students/waterloo/local-support" title="Local Support" />
                            </DropdownSection>
                            <DropdownSection title="Guelph Region">
                                <DropdownItem to="/students/guelph/overview" title="Overview & Consultation" />
                                <DropdownItem to="/students/guelph/study-permit" title="Study Permit" />
                                <DropdownItem to="/students/guelph/extension" title="Extension" />
                                <DropdownItem to="/students/guelph/pgwp" title="PGWP" />
                                <DropdownItem to="/students/guelph/work-while-studying" title="Work While Studying" />
                                <DropdownItem to="/students/guelph/refusals" title="Refusals" />
                                <DropdownItem to="/students/guelph/local-support" title="Local Support" />
                            </DropdownSection>
                        </div>
                    </Dropdown>

                    <Dropdown
                        label="eOffice"
                        isSolid={isSolid}
                        isOpen={activeDropdown === 'eoffice'}
                        onMouseEnter={() => setActiveDropdown('eoffice')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="w-[300px] p-4">
                            <DropdownItem to="/e-office" title="Client Intake Tools" />
                            <DropdownItem to="/e-office" title="Document Checklists" />
                            <DropdownItem to="/e-office" title="Forms Library" />
                            <DropdownItem to="/e-office" title="Submission Tools" />
                            <DropdownItem to="/e-office" title="Refusal Analysis" />
                        </div>
                    </Dropdown>

                    <Dropdown
                        label="Resources"
                        isSolid={isSolid}
                        isOpen={activeDropdown === 'resources'}
                        onMouseEnter={() => setActiveDropdown('resources')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="w-[300px] p-4">
                            <DropdownItem to="/resources" title="Immigration FAQs" />
                            <DropdownItem to="/resources" title="Express Entry Explained" />
                            <DropdownItem to="/resources" title="Employer Hiring Guides" />
                            <DropdownItem to="/resources" title="Student Guides" />
                            <DropdownItem to="/resources" title="Common Mistakes" />
                            <DropdownItem to="/resources" title="Government Links" />
                        </div>
                    </Dropdown>

                </nav>

                {/* --- RIGHT ACTIONS (Address, Socials, Translate) --- */}
                <div className="hidden lg:flex items-center gap-6">
                    {/* 3. Mississauga Address */}
                    <Link to="/contact" className={`text-xs font-medium flex items-center gap-1 hover:underline ${isSolid ? 'text-gray-600' : 'text-gray-300'}`}>
                        <MapPin size={14} />
                        <span>Mississauga, ON</span>
                    </Link>

                    {/* 4 & 5. Social Icons */}
                    <div className="flex items-center gap-3">
                        <SocialLink href="https://www.facebook.com/abicrcic" icon={<Facebook size={18} />} isSolid={isSolid} />
                        <SocialLink href="#" icon={<Instagram size={18} />} isSolid={isSolid} />
                    </div>

                    {/* 6. Translate Button */}
                    {/* 6. Translate Button */}
                    <div id="google_translate_element" className={`transition-all ${isSolid ? 'text-gray-700' : 'text-white'}`}></div>

                    {/* Book Consultation (Re-added per visual reference implication) */}
                    <Link to="/book-consultation" className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all ${isSolid ? 'bg-abic-blue text-white hover:bg-abic-blue/90' : 'bg-white text-abic-blue hover:bg-gray-100'}`}>
                        Book Consultation
                    </Link>
                </div>

                {/* --- MOBILE TOGGLE --- */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`lg:hidden p-2 rounded-lg transition-colors ${isSolid ? 'text-abic-blue hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* --- MOBILE MENU --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white fixed inset-0 top-[76px] overflow-y-auto pb-20 z-40"
                    >
                        <div className="p-6 space-y-2">
                            <MobileAccordion title="Home">
                                <div className="pl-4 space-y-2 pt-2">
                                    <MobileLink to="/">Overview</MobileLink>
                                    <MobileLink to="/why-choose-abic">Why Choose ABIC</MobileLink>
                                    <MobileLink to="/services-overview">Our Services at a Glance</MobileLink>
                                    <MobileLink to="/contact">Social & Contact Links</MobileLink>
                                </div>
                            </MobileAccordion>

                            <MobileAccordion title="About Us">
                                <div className="pl-4 space-y-2 pt-2">
                                    <MobileLink to="/about">Our Practice</MobileLink>
                                    <MobileLink to="/about">Credentials</MobileLink>
                                    <MobileLink to="/about">Verify Status</MobileLink>
                                    <MobileLink to="/about">Client Reviews</MobileLink>
                                </div>
                            </MobileAccordion>

                            <MobileAccordion title="Services">
                                <div className="space-y-4 pl-4 pt-2">
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-gray-400 uppercase">Temp Status</p>
                                        <MobileLink to="/visitor-visa/application">Visitor Visa</MobileLink>
                                        <MobileLink to="/study-in-canada/application">Study in Canada</MobileLink>
                                        <MobileLink to="/work-permit/overview">Work Permit</MobileLink>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-gray-400 uppercase">Permanent</p>
                                        <MobileLink to="/express-entry/fsw">Express Entry</MobileLink>
                                        <MobileLink to="/family-sponsorship/spousal">Family Sponsorship</MobileLink>
                                        <MobileLink to="/pr-citizenship/pr">PR & Citizenship</MobileLink>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-gray-400 uppercase">Employers</p>
                                        <MobileLink to="/employers-lmia/process">LMIA & Compliance</MobileLink>
                                    </div>
                                </div>
                            </MobileAccordion>

                            <MobileAccordion title="Students at Waterloo">
                                <div className="pl-4 space-y-2 pt-2">
                                    <MobileLink to="/students/waterloo/overview">Overview & Consultation</MobileLink>
                                    <MobileLink to="/students/waterloo/study-permit">Study Permit (Waterloo)</MobileLink>
                                    <MobileLink to="/students/waterloo/extension">Extension (Waterloo)</MobileLink>
                                    <MobileLink to="/students/waterloo/pgwp">PGWP</MobileLink>
                                    <MobileLink to="/students/waterloo/work-while-studying">Work While Studying</MobileLink>
                                    <MobileLink to="/students/waterloo/refusals">Refusals</MobileLink>
                                    <MobileLink to="/students/waterloo/local-support">Local Support</MobileLink>
                                </div>
                            </MobileAccordion>

                            <MobileAccordion title="Students in Guelph">
                                <div className="pl-4 space-y-2 pt-2">
                                    <MobileLink to="/students/guelph/overview">Overview & Consultation</MobileLink>
                                    <MobileLink to="/students/guelph/study-permit">Study Permit (Guelph)</MobileLink>
                                    <MobileLink to="/students/guelph/extension">Extension (Guelph)</MobileLink>
                                    <MobileLink to="/students/guelph/pgwp">PGWP</MobileLink>
                                    <MobileLink to="/students/guelph/work-while-studying">Work While Studying</MobileLink>
                                    <MobileLink to="/students/guelph/refusals">Refusals</MobileLink>
                                    <MobileLink to="/students/guelph/local-support">Local Support</MobileLink>
                                </div>
                            </MobileAccordion>

                            <MobileAccordion title="eOffice">
                                <div className="pl-4 space-y-2 pt-2">
                                    <MobileLink to="/e-office">Client Intake Tools</MobileLink>
                                    <MobileLink to="/e-office">Document Checklists</MobileLink>
                                    <MobileLink to="/e-office">Forms & Generator</MobileLink>
                                    <MobileLink to="/e-office">Refusal Analysis</MobileLink>
                                </div>
                            </MobileAccordion>

                            <MobileAccordion title="Resources">
                                <div className="pl-4 space-y-2 pt-2">
                                    <MobileLink to="/resources">Immigration FAQs</MobileLink>
                                    <MobileLink to="/resources">Important Guides</MobileLink>
                                    <MobileLink to="/resources">Government Links</MobileLink>
                                </div>
                            </MobileAccordion>

                            <MobileAccordion title="Book a Consultation">
                                <div className="pl-4 space-y-2 pt-2">
                                    <MobileLink to="/book-consultation">Virtual Consultation</MobileLink>
                                    <MobileLink to="/book-consultation">In-Person Consultation</MobileLink>
                                    <MobileLink to="/book-consultation">Fees & Payment</MobileLink>
                                </div>
                            </MobileAccordion>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

// --- SUB-COMPONENTS ---

// NavLink component removed as all items are now Dropdowns

const Dropdown = ({ label, isSolid, isOpen, onMouseEnter, onMouseLeave, children }: any) => (
    <div
        className="relative group h-full flex items-center"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <button className={`flex items-center gap-1 px-4 py-2 text-sm font-bold font-montserrat uppercase tracking-wider transition-colors duration-300 ${isSolid ? 'text-gray-700 hover:text-abic-blue' : 'text-white/90 hover:text-white'
            }`}>
            {label}
            <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-4"
                >
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-abic-blue to-abic-gold" />
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const DropdownSection = ({ title, children }: any) => (
    <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">{title}</h4>
        <div className="space-y-1">
            {children}
        </div>
    </div>
);

const DropdownItem = ({ to, title, desc }: { to: string, title: string, desc?: string }) => (
    <Link to={to} className="block px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors group">
        <div className="font-medium text-gray-700 text-sm group-hover:text-abic-blue transition-colors">{title}</div>
        {desc && <div className="text-xs text-gray-400 group-hover:text-gray-500">{desc}</div>}
    </Link>
);

const SocialLink = ({ href, icon, isSolid }: any) => (
    <a
        href={href}
        className={`p-2 rounded-full transition-all duration-300 ${isSolid
            ? 'text-gray-400 hover:text-abic-blue hover:bg-blue-50'
            : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
    >
        {icon}
    </a>
);

const MobileAccordion = ({ title, children }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 text-base font-bold text-gray-800"
            >
                {title}
                <ChevronRight size={18} className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const MobileLink = ({ to, children }: any) => (
    <Link to={to} className="block py-2 text-sm text-gray-600 hover:text-abic-blue pl-2 border-l-2 border-transparent hover:border-abic-blue transition-all">
        {children}
    </Link>
);

export const Footer = () => {
    // ... (Footer content remains same, truncating for brevity as requested change is Header)
    return (
        <footer className="bg-[#0A1A2F] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <img src="/assets/logo-full.png" alt="ABIC" className="h-16 w-auto brightness-0 invert opacity-90" />
                        <div className="h-10 w-px bg-white/20"></div>
                        <img src="/assets/cicc-logo-new.png" alt="CICC-CCIC Regulated Member" className="h-12 w-auto bg-white/90 rounded p-1" />
                    </div>
                    <p className="text-gray-400 text-sm leading-loose">
                        Empowering your journey to Canada with integrity, expertise, and personalized care. Regulated Canadian Immigration Consultants you can trust.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-abic-blue transition-colors"><Facebook size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-abic-pink transition-colors"><Instagram size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-abic-gold transition-colors text-black"><Mail size={18} /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-abic-gold font-bold uppercase tracking-widest mb-6 text-sm">Services</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link to="/visitor-visa" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full" /> Visitor Visa</Link></li>
                        <li><Link to="/study-in-canada" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full" /> Study in Canada</Link></li>
                        <li><Link to="/express-entry" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full" /> Express Entry</Link></li>
                        <li><Link to="/family-sponsorship" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full" /> Family Sponsorship</Link></li>
                        <li><Link to="/employers-lmia" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full" /> Employers (LMIA)</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-abic-gold font-bold uppercase tracking-widest mb-6 text-sm">Resources</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link to="/students/waterloo" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full" /> Students: Waterloo</Link></li>
                        <li><Link to="/students/guelph" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full" /> Students: Guelph</Link></li>
                        <li><Link to="/e-office" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full" /> Client eOffice</Link></li>
                        <li><Link to="/book-consultation" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-gray-600 rounded-full" /> Book Consultation</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-abic-gold font-bold uppercase tracking-widest mb-6 text-sm">Contact Us</h4>
                    <ul className="space-y-6 text-sm text-gray-400">
                        <li className="flex items-start gap-4">
                            <MapPin className="text-abic-gold shrink-0" size={20} />
                            <span>130 Dundas St East, Suite 303<br />Mississauga, ON L5A 3V8<br />Canada</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Phone className="text-abic-gold shrink-0" size={20} />
                            <a href="tel:+14163338110" className="hover:text-white transition-colors">+1 (416) 333 8110</a>
                        </li>
                        <li className="flex items-center gap-4">
                            <Mail className="text-abic-gold shrink-0" size={20} />
                            <a href="mailto:info@abicimmigration.com" className="hover:text-white transition-colors">info@abicimmigration.com</a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>&copy; 2026 ABIC Immigration Inc. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
