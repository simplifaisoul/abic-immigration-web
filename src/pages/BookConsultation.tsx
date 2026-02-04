import { Calendar, Clock, MessageSquare, CheckCircle2 } from "lucide-react";

export default function BookConsultation() {
    return (
        <div className="bg-gray-50 pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-montserrat font-bold text-abic-blue mb-4">Book a Consultation</h1>
                    <p className="text-gray-600">Start your journey with professional, regulated immigration advice.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Consultation Options */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-abic-blue/10 rounded-full flex items-center justify-center mb-6">
                            <Calendar className="text-abic-blue" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Initial Consultation</h3>
                        <p className="text-gray-500 mb-6">In-Person or Virtual (Zoom/WhatsApp)</p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-gray-700">
                                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                <span>Eligibility Assessment</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                <span>Document Review</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                <span>Strategic Pathway Planning</span>
                            </li>
                        </ul>

                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-3xl font-bold text-abic-blue">$150.00</span>
                            <span className="text-gray-400 text-sm mb-1">/ 60 mins</span>
                        </div>

                        <a href="https://calendly.com/placeholder" className="block w-full py-4 bg-abic-red text-white font-bold text-center rounded hover:bg-red-700 transition-colors">
                            Book Now
                        </a>
                    </div>

                    {/* WhatsApp Support */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <MessageSquare className="text-green-600" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Inquiries</h3>
                        <p className="text-gray-500 mb-6">Have a quick question before booking? Reach out to us directly on WhatsApp.</p>

                        <div className="mt-auto">
                            <a href="https://wa.me/14163338110" className="block w-full py-4 bg-green-500 text-white font-bold text-center rounded hover:bg-green-600 transition-colors mb-4">
                                Chat on WhatsApp
                            </a>
                            <p className="text-xs text-center text-gray-400">Response time: Usually within 2 hours</p>
                        </div>
                    </div>
                </div>

                {/* Policies */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Clock size={20} className="text-abic-gold" />
                        Cancellation & Rescheduling Policy
                    </h3>
                    <div className="text-sm text-gray-600 space-y-2">
                        <p>We understand that plans change. If you need to cancel or reschedule your appointment, we respectfully request at least <strong>24 hours notice</strong>.</p>
                        <p>Cancellations made with less than 24 hours notice may be subject to a cancellation fee of 50% of the consultation cost.</p>
                        <p>Full refunds are provided for cancellations made prior to the 24-hour window.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
