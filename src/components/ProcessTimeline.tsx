import { motion } from "framer-motion";

const STEPS = [
    { title: "Assessment", desc: "Detailed eligibility check." },
    { title: "Strategy", desc: "Customized immigration plan." },
    { title: "Application", desc: "Professionally prepared submission." },
    { title: "Approval", desc: "Guidance until you land." },
];

export default function ProcessTimeline() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-abic-gold font-bold tracking-widest uppercase mb-4 text-sm">Our Process</h2>
                    <h3 className="text-4xl font-montserrat font-bold text-abic-blue">Your Journey to Canada</h3>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="relative z-10 bg-white p-6 rounded-xl border border-gray-100 shadow-lg text-center group hover:border-abic-blue/30 transition-all"
                            >
                                <div className="w-12 h-12 bg-abic-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-white shadow-lg group-hover:bg-abic-gold transition-colors">
                                    {i + 1}
                                </div>
                                <h4 className="text-xl font-bold font-montserrat text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-gray-500 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
