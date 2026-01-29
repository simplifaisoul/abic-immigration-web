import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-24 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-abic-gold font-bold tracking-widest uppercase mb-4 text-sm">Get in Touch</h2>
                        <h3 className="text-4xl font-montserrat font-bold text-abic-blue mb-8">Visit Our Headquarters</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-abic-blue/5 rounded-2xl text-abic-blue">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Mississauga Office</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Dixie Park Mall, Unit 318<br />
                                        1550 South Gateway Rd.<br />
                                        Mississauga, ON L4W 5G6
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-abic-blue/5 rounded-2xl text-abic-blue">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Direct Line</h4>
                                    <a href="tel:+14163338110" className="text-gray-600 hover:text-abic-blue transition-colors text-lg font-medium">
                                        +1 (416) 333 8110
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-abic-blue/5 rounded-2xl text-abic-blue">
                                    <Clock size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Office Hours</h4>
                                    <p className="text-gray-600">Mon-Fri: 9:00 AM — 6:00 PM</p>
                                    <p className="text-gray-600">Sat: 10:00 AM — 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold font-montserrat text-abic-blue mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-abic-blue focus:ring-2 focus:ring-abic-blue/20 outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-abic-blue focus:ring-2 focus:ring-abic-blue/20 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-abic-blue focus:ring-2 focus:ring-abic-blue/20 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-abic-blue focus:ring-2 focus:ring-abic-blue/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full py-4 bg-abic-red text-white font-bold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
