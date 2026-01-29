import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
            {/* Background Graphic (Abstract Map/World) */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-contain bg-no-repeat bg-right-center"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-abic-blue/5 border border-abic-blue/10 text-abic-blue text-sm font-bold tracking-widest mb-6">
                            EXCEPTIONAL SERVICE & SUPPORT
                        </span>
                        <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold text-abic-blue leading-tight mb-6">
                            Your Trusted <br />
                            <span className="text-abic-red block min-h-[1.2em]">
                                <TypeAnimation
                                    sequence={[
                                        'Gateway to Canada',
                                        2000,
                                        'Partner for Visa',
                                        2000,
                                        'Path to PR',
                                        2000,
                                        'Immigration Expert',
                                        2000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Authorized representation for Express Entry, Study Visas, and Family Sponsorship.
                            Led by <strong>Anthony Wai Kean Cheah</strong> (RCIC, M.Sc.).
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a href="#assessment" className="px-8 py-4 bg-abic-blue text-white font-bold rounded shadow-xl hover:bg-abic-blue/90 transition-all flex items-center justify-center gap-2 group">
                            Begin Assessment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#services" className="px-8 py-4 bg-white border border-gray-200 text-abic-blue font-bold rounded shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                            Our Services
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pt-8 flex flex-wrap items-center gap-8 text-sm font-medium text-gray-500"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-abic-gold" size={18} />
                            <span>RCIC Licensed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-abic-gold" size={18} />
                            <span><CountUp end={98} duration={2.5} />% Success Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-abic-gold" size={18} />
                            <span>Global Offices</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image / Composition */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-md mx-auto">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Toronto Skyline" className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-abic-blue/80 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-lg">Headquartered in Mississauga, ON</p>
                                    <p className="text-sm opacity-80">Serving clients worldwide since 1997</p>
                                </div>
                            </div>
                        </div>
                    </Tilt>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-abic-gold/20 rounded-full blur-3xl"></div>
                    <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-abic-blue/10 rounded-full blur-3xl"></div>
                </motion.div>

            </div>
        </section>
    );
}
