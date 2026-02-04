import type { ReactNode } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceLayoutProps {
    title: string;
    subtitle: string;
    heroImage: string;
    children: ReactNode;
}

export default function ServiceLayout({ title, subtitle, heroImage, children }: ServiceLayoutProps) {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={heroImage} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-abic-blue/80 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center text-white px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">{title}</h1>
                    <p className="text-xl opacity-90">{subtitle}</p>
                </div>
            </div>

            {/* Breadcrumb / Back */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-abic-blue transition-colors">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

                <div className="md:col-span-2 space-y-8">
                    {children}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h3 className="font-bold text-abic-blue mb-4">Why Professional Help Matters</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-abic-gold shrink-0 mt-0.5" />
                                <span>Avoid common refusal reasons</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-abic-gold shrink-0 mt-0.5" />
                                <span>Ensure incomplete forms don't delay you</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-abic-gold shrink-0 mt-0.5" />
                                <span>Submission Letter grounded in Case Law</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-abic-blue text-white p-6 rounded-xl text-center">
                        <h3 className="font-bold mb-2">Need Assessment?</h3>
                        <p className="text-sm opacity-80 mb-6">Book a consultation to discuss your specific case eligibility.</p>
                        <Link to="/book-consultation" className="block w-full py-3 bg-abic-red rounded font-bold hover:bg-red-700 transition-colors">
                            Book Consultation
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
