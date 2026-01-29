import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, RefreshCcw } from "lucide-react";

type Step = "goal" | "age" | "education" | "result";

export default function AssessmentWizard() {
    const [step, setStep] = useState<Step>("goal");
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleSelect = (key: string, value: string, nextStep: Step) => {
        setAnswers({ ...answers, [key]: value });
        setStep(nextStep);
    };

    const reset = () => {
        setStep("goal");
        setAnswers({});
    };

    const variants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    };

    return (
        <section className="py-24 bg-gradient-to-br from-abic-blue to-black text-white relative overflow-hidden" id="assessment">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-abic-blue/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-abic-gold/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-abic-gold font-bold tracking-widest uppercase text-sm">Free Evaluation</span>
                    <h2 className="text-4xl md:text-5xl font-montserrat font-bold mt-2">Do You Qualify for Canada?</h2>
                    <p className="text-gray-400 mt-4 text-lg">Answer 3 simple questions to see your potential pathway.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {step === "goal" && (
                            <motion.div key="goal" variants={variants} initial="initial" animate="animate" exit="exit" className="w-full">
                                <h3 className="text-2xl font-bold mb-8 text-center">What is your primary goal?</h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { label: "Study in Canada", icon: "🎓", value: "study" },
                                        { label: "Work & Live", icon: "💼", value: "work" },
                                        { label: "Sponsor Family", icon: "👨‍👩‍👧", value: "family" },
                                    ].map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => handleSelect("goal", option.value, "age")}
                                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-abic-gold hover:text-white hover:border-abic-gold transition-all group flex flex-col items-center gap-4 text-center"
                                        >
                                            <span className="text-4xl group-hover:scale-110 transition-transform">{option.icon}</span>
                                            <span className="font-bold text-lg">{option.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === "age" && (
                            <motion.div key="age" variants={variants} initial="initial" animate="animate" exit="exit" className="w-full max-w-lg mx-auto">
                                <h3 className="text-2xl font-bold mb-8 text-center">What is your age range?</h3>
                                <div className="space-y-3">
                                    {["18 - 25", "26 - 35", "36 - 45", "46+"].map((age) => (
                                        <button
                                            key={age}
                                            onClick={() => handleSelect("age", age, "education")}
                                            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white hover:text-abic-blue flex items-center justify-between group transition-all"
                                        >
                                            <span className="font-medium text-lg">{age}</span>
                                            <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === "education" && (
                            <motion.div key="education" variants={variants} initial="initial" animate="animate" exit="exit" className="w-full max-w-lg mx-auto">
                                <h3 className="text-2xl font-bold mb-8 text-center">Highest Level of Education?</h3>
                                <div className="space-y-3">
                                    {["High School", "Bachelor's Degree", "Master's / PhD", "Trade Certificate"].map((edu) => (
                                        <button
                                            key={edu}
                                            onClick={() => handleSelect("education", edu, "result")}
                                            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white hover:text-abic-blue flex items-center justify-between group transition-all"
                                        >
                                            <span className="font-medium text-lg">{edu}</span>
                                            <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === "result" && (
                            <motion.div key="result" variants={variants} initial="initial" animate="animate" exit="exit" className="text-center w-full">
                                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                                    <Check size={40} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">You May Be Eligible!</h3>
                                <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
                                    Based on your interest in <strong>{answers.goal === 'study' ? 'Studying' : answers.goal === 'work' ? 'Working' : 'Family Sponsorship'}</strong>,
                                    we have customized pathways for you.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="#contact" className="px-8 py-4 bg-abic-gold text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-all flex items-center justify-center gap-2">
                                        Get Full Analysis <ArrowRight size={20} />
                                    </a>
                                    <button onClick={reset} className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                        <RefreshCcw size={18} /> Restart
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
