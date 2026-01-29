import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Building2, HeartHandshake, Plane } from "lucide-react";

// Content scraped from abicrcic.ca
const services = [
    {
        title: "Express Entry",
        description: "Fast-track your Permanent Residency. We build meticulous profiles to maximize your CRS score.",
        icon: <Plane className="h-8 w-8 text-white" />,
        color: "bg-abic-blue",
        textColor: "text-white",
        colSpan: "md:col-span-2",
        link: "#"
    },
    {
        title: "Student Visa",
        description: "Your journey to Canadian education starts here. Acceptance letter to study permit.",
        icon: <GraduationCap className="h-8 w-8 text-abic-blue" />,
        color: "bg-white",
        textColor: "text-gray-900",
        colSpan: "md:col-span-1",
        link: "#"
    },
    {
        title: "Family Sponsorship",
        description: "Reunite with your loved ones. Spousal, parent, and grandparent sponsorship programs.",
        icon: <Users className="h-8 w-8 text-abic-blue" />,
        color: "bg-white",
        textColor: "text-gray-900",
        colSpan: "md:col-span-1",
        link: "#"
    },
    {
        title: "Provincial Nomination",
        description: "Unlock Ontario's OINP streams. We identify opportunities others miss.",
        icon: <Building2 className="h-8 w-8 text-abic-blue" />,
        color: "bg-white",
        textColor: "text-gray-900",
        colSpan: "md:col-span-1",
        link: "#"
    },
    {
        title: "In-Home Caregiver",
        description: "Dedicated pathways for caregivers to work and live in Canada.",
        icon: <HeartHandshake className="h-8 w-8 text-white" />,
        color: "bg-abic-red",
        textColor: "text-white",
        colSpan: "md:col-span-1",
        link: "#"
    },
    {
        title: "Quebec Skilled Worker",
        description: "Expert guidance for the unique requirements of immigration to Quebec.",
        icon: <Briefcase className="h-8 w-8 text-white" />,
        color: "bg-abic-gold",
        textColor: "text-white", // Dark text on gold? White might be better with dark gold. Let's try white.
        colSpan: "md:col-span-2",
        link: "#"
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-white px-6" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-abic-gold font-bold tracking-widest uppercase mb-4 text-sm">Our Expertise</h2>
                    <h3 className="text-4xl font-montserrat font-bold text-abic-blue mb-4">Comprehensive Immigration Solutions</h3>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Whether you are planning to study, work, or settle permanently, we provide full representation
                        before IRCC, ESDC, and PNP offices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${service.colSpan} ${service.color} ${service.textColor} rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                        >
                            <div className="relative z-10 w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mb-4">
                                {service.icon}
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold font-montserrat mb-2">{service.title}</h4>
                                <p className={`text-sm ${service.textColor === 'text-white' ? 'opacity-90' : 'text-gray-600'}`}>
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative Circle for Hover */}
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
