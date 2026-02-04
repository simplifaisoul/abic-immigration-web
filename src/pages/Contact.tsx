import ServiceLayout from "../components/ServiceLayout";
import { MapPin, Phone, Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <ServiceLayout
            title="Contact Us"
            subtitle="We are here to help. Reach out to us for any inquiries or to book a consultation."
            heroImage="https://images.unsplash.com/photo-1423666639041-f14d70fa4c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* 1. Contact Grid */}
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Office Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center mb-6">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
                        <p className="text-gray-600 mb-4">
                            130 Dundas St East, Suite 303<br />
                            Mississauga, ON L5A 3V8<br />
                            Canada
                        </p>
                        <a href="https://maps.google.com/?q=130+Dundas+St+East,+Mississauga,+ON" target="_blank" rel="noreferrer" className="text-abic-blue font-bold text-sm hover:underline">
                            Get Directions &rarr;
                        </a>
                    </div>

                    {/* Phone & Email */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-red-50 text-abic-red rounded-full flex items-center justify-center mb-6">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Call or Email</h3>
                        <p className="text-gray-600 mb-4">
                            <a href="tel:+14163338110" className="block hover:text-abic-red transition-colors">+1 (416) 333 8110</a>
                            <a href="mailto:info@abicimmigration.com" className="block hover:text-abic-red transition-colors">info@abicimmigration.com</a>
                        </p>
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Mon-Fri: 9am - 5pm EST</span>
                    </div>

                    {/* Socials */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-gold-50 text-abic-gold rounded-full flex items-center justify-center mb-6">
                            <MessageSquare size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Socially</h3>
                        <p className="text-gray-600 mb-6">
                            Follow us for the latest immigration news and success stories.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Facebook size={20} />} href="https://www.facebook.com/abicrcic" color="hover:bg-blue-600 hover:text-white" />
                            <SocialIcon icon={<Instagram size={20} />} href="#" color="hover:bg-pink-600 hover:text-white" />
                            <SocialIcon icon={<Linkedin size={20} />} href="#" color="hover:bg-blue-700 hover:text-white" />
                        </div>
                    </div>
                </section>

                {/* 2. Map Section */}
                <section className="bg-gray-100 rounded-3xl overflow-hidden h-96 relative shadow-inner">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.8767223727!2d-79.6200223237894!3d43.58525297110543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b472e3828977d%3A0x6a0a3820257743d!2s130%20Dundas%20St%20E%20%23303%2C%20Mississauga%2C%20ON%20L5A%203V8!5e0!3m2!1sen!2sca!4v1709669000000!5m2!1sen!2sca"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </section>

            </div>
        </ServiceLayout>
    );
}

const SocialIcon = ({ icon, href, color }: any) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center transition-all duration-300 ${color}`}
    >
        {icon}
    </a>
);
