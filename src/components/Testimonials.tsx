import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const FEATURED_TESTIMONIALS = [
    {
        name: "Xin Zhang",
        year: "2025",
        text: "Anthony has been really helpful in my case, with his patience and expertise! Highly recommended!"
    },
    {
        name: "Preet Sandhu",
        year: "2025",
        text: "I had the privilege of being mentored by Anthony, an outstanding immigration consultant whose guidance and expertise were invaluable."
    },
    {
        name: "Ron T",
        year: "2019",
        text: "Experienced consultant who truly understands the immigration system."
    }
];

const ALL_REVIEWS = [
    { name: "Lynn Garfin", year: "2021", text: "Very knowledgeable and professional. Always takes time to explain all available options clearly." },
    { name: "Alan De Zilva", year: "2019", text: "Ethical, honest, and transparent. No false promises." },
    { name: "Kristel Estefani", year: "2021", text: "Superb knowledge and always submits on time. All our visas were approved." },
    { name: "Thompson Feng", year: "2020", text: "Highly experienced consultant with deep understanding of immigration policies and regulations." },
    { name: "Lynn Garfin", year: "2021", text: "Very professional and easy to talk to. He takes time to sit down and explain everything." },
    { name: "Gary Rohilla", year: "2020", text: "Transparent, genuine, and very thorough in preparing cases." },
    { name: "Ron T", year: "2019", text: "Experienced consultant who truly understands the immigration system." },
    { name: "Abie Balana", year: "2021", text: "Always willing to help and go the extra mile." },
    { name: "Smriti Sharma", year: "2019", text: "Best place in GTA for immigration services. Highly recommended." },
    { name: "Wan Teng Wu", year: "2019", text: "Trustworthy, reliable, and extremely knowledgeable." },
    { name: "Sahil Sayal", year: "2019", text: "Clear advice with realistic expectations and no exaggeration." },
    { name: "Michael Zhou", year: "2019", text: "Excellent mentor and professional consultant." },
    { name: "Jerry Lim", year: "2019", text: "Strong attention to detail and excellent follow-up." },
    { name: "Anand Manohar", year: "2018", text: "Worth every penny spent for professional immigration guidance." },
    { name: "Sunday Onoja", year: "2019", text: "Explains complex immigration rules clearly and patiently." }
];

const StarRating = () => (
    <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={16} className="fill-abic-gold text-abic-gold" />
        ))}
    </div>
);

export default function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto px-6">

                {/* 1. Header & Intro */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="bg-blue-50 text-abic-blue font-bold px-4 py-1.5 rounded-full inline-block mb-6 text-sm tracking-wide uppercase">
                        Trusted by Clients Since 2017
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-montserrat">
                        Client Reviews & Testimonials
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        For over 7 years, Above & Beyond Immigration Consultants (ABIC) has assisted clients with study permits, work permits, permanent residence applications, LMIA cases, and professional mentoring. Our commitment to accuracy, transparency, and ethical practice is reflected in consistent client feedback.
                    </p>
                </div>

                {/* 2. Featured Recent Testimonials (Top Display) */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {FEATURED_TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center relative hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-abic-blue to-abic-gold rounded-t-3xl"></div>
                            <StarRating />
                            <Quote size={40} className="text-gray-100 absolute top-8 right-8" />
                            <p className="text-lg text-gray-700 italic mb-6 relative z-10">"{t.text}"</p>
                            <div className="mt-auto">
                                <div className="font-bold text-gray-900">{t.name}</div>
                                <div className="text-sm text-gray-500">({t.year})</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3. Top 15 Individual Reviews (Carousel-style grid) */}
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    <div className="overflow-x-auto pb-12 snap-x scrollbar-hide flex gap-6 px-4">
                        {ALL_REVIEWS.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-80 md:w-96 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm snap-center"
                            >
                                <StarRating />
                                <p className="text-gray-600 mb-4 h-24 overflow-y-auto text-sm leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <div className="w-8 h-8 bg-blue-50 text-abic-blue rounded-full flex items-center justify-center font-bold text-xs">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                                        <div className="text-xs text-gray-500">({t.year})</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
                        <span>← Scroll to see more reviews →</span>
                    </p>
                </div>

                {/* 4. Trust Badge / Micro-Copy */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col items-center bg-white px-8 py-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={24} className="fill-abic-gold text-abic-gold" />
                            ))}
                        </div>
                        <div className="font-bold text-gray-900 text-lg mb-1">Rated by Clients Since 2017</div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 uppercase tracking-widest font-semibold">
                            <span>Transparent</span>
                            <span className="text-abic-gold">•</span>
                            <span>Ethical</span>
                            <span className="text-abic-gold">•</span>
                            <span>Professional</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
