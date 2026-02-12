import ServiceLayout from "../components/ServiceLayout";
import { MapPin, Phone, Facebook, Instagram, Linkedin, MessageSquare, Mail, User, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
                            7111 Syntex Drive, 3rd Floor<br />
                            Mississauga, ON L5N 8C3<br />
                            Canada
                        </p>
                        <a href="https://maps.google.com/?q=7111+Syntex+Drive,+Mississauga,+ON" target="_blank" rel="noreferrer" className="text-abic-blue font-bold text-sm hover:underline">
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

                {/* 2. WhatsApp Button */}
                <section className="bg-gradient-to-r from-green-500 to-green-600 text-white p-10 rounded-3xl text-center shadow-xl">
                    <div className="max-w-2xl mx-auto">
                        <MessageSquare size={48} className="mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-4">Quick Questions? Message Us on WhatsApp</h2>
                        <p className="text-lg opacity-90 mb-6">
                            Get instant responses to your immigration questions via WhatsApp
                        </p>
                        <a
                            href="https://wa.me/14163338110"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg"
                        >
                            <MessageSquare size={24} />
                            Chat on WhatsApp
                        </a>
                        <p className="text-sm opacity-75 mt-4">+1 (416) 333-8110</p>
                    </div>
                </section>

                {/* 3. Contact Form */}
                <section className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                            <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-abic-blue focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-abic-blue focus:border-transparent transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-abic-blue focus:border-transparent transition-all"
                                            placeholder="+1 (416) 123-4567"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-abic-blue focus:border-transparent transition-all"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="consultation">Book a Consultation</option>
                                        <option value="student">Student Services</option>
                                        <option value="work-permit">Work Permit</option>
                                        <option value="pr">Permanent Residence</option>
                                        <option value="family">Family Sponsorship</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-abic-blue focus:border-transparent transition-all resize-none"
                                    placeholder="Tell us about your immigration needs..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-abic-blue text-white font-bold py-4 rounded-xl hover:bg-abic-blue/90 transition-colors shadow-lg flex items-center justify-center gap-3 text-lg"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>

                {/* 4. Map Section */}
                <section className="bg-gray-100 rounded-3xl overflow-hidden h-96 relative shadow-inner">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.234!2d-79.7234!3d43.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s7111+Syntex+Drive%2C+Mississauga%2C+ON!5e0!3m2!1sen!2sca!4v1709669000000!5m2!1sen!2sca"
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
