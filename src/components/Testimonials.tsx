import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Srikrishen Taneja",
        role: "Immigration Client",
        text: "Anthony Wkean is a most dynamic, energetic and vibrant person. He is a fantastic man, very patient, calm and cool. He takes things very easily and does the work with high energy, enthusiasm and effort."
    },
    {
        name: "Capt. B Yadav",
        role: "Managing Director at Fly4 Overseas",
        text: "Anthony Wkean is a very good person to deal with, affable, intelligent, and honest, and most of all efficient and a hard-working personality. I highly recommend him."
    },
    {
        name: "Jesse Amesimeku Tettey",
        role: "Associate At Interim Global Solution",
        text: "Anthony Wkean Cheah is a committed, reliable, trustworthy, and dedicated lecturer and person. I have known him since 1997 as a personal friend."
    },
    {
        name: "Dr. Allen Lim",
        role: "Business Professor at University of Regina",
        text: "He is an excellent university instructor with foresight in pragmatic and innovative style of modern approach teaching. Most of his past students are now successfully in their professional careers."
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-abic-gold font-bold tracking-widest uppercase mb-4 text-sm">Success Stories</h2>
                    <h3 className="text-4xl font-montserrat font-bold text-abic-blue">Client Talk</h3>
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-8 overflow-x-auto pb-8 snap-x scrollbar-hide">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-full md:w-[400px] bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative snap-center group hover:shadow-2xl transition-all"
                        >
                            <Quote className="absolute top-8 right-8 text-abic-gold/20 h-12 w-12 group-hover:text-abic-gold/40 transition-colors" />
                            <p className="text-gray-600 mb-6 leading-relaxed italic relative z-10">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-abic-blue">{t.name}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
