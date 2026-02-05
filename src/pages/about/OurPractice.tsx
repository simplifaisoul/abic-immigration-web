import ServiceLayout from "../../components/ServiceLayout";
import { Globe, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function OurPractice() {
    return (
        <ServiceLayout
            title="Our Practice"
            subtitle="Integrity. Expertise. Personalized Strategy. Your trusted partner in Canadian immigration."
            heroImage="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Philosophy */}
                <section className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-montserrat text-gray-900 mb-8">More Than Just Paperwork</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                        At ABIC Immigration, we believe that every client is is a unique story, not just a file number.
                        We are dedicated to providing ethical, transparent, and results-driven legal representation.
                        We don't just fill out forms; we build comprehensive strategies to turn your Canadian dream into reality.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
                        <ValueCard
                            icon={<Target className="text-abic-red" size={32} />}
                            title="Strategic Approach"
                            desc="We analyze your unique profile to find the most direct and secure pathway to Canada."
                        />
                        <ValueCard
                            icon={<Users className="text-abic-blue" size={32} />}
                            title="Client-Centric"
                            desc="We communicate clearly and honestly. No hidden fees, no false promises."
                        />
                        <ValueCard
                            icon={<Globe className="text-abic-gold" size={32} />}
                            title="Global Reach"
                            desc="Serving clients from over 50 countries with diverse backgrounds and goals."
                        />
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* Founder Intro */}
                <section className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                    <div className="shrink-0 relative">
                        <img
                            src="/assets/anthony-cheah.png"
                            alt="Anthony Cheah"
                            className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-xl"
                        />
                        <div className="absolute bottom-0 right-0 bg-abic-blue text-white text-xs font-bold px-3 py-1 rounded-full">FOUNDER</div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Anthony Cheah</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            As a Regulated Canadian Immigration Consultant (RCIC), Anthony has helped hundreds of individuals and families navigate the complexities of Canadian immigration law. His practice is built on the foundation of rigorous adherence to professional standards and a deep passion for helping people build new lives in Canada.
                        </p>
                        <Link to="/about/credentials" className="text-abic-blue font-bold hover:underline">
                            View Full Credentials &rarr;
                        </Link>
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const ValueCard = ({ icon, title, desc }: any) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="mb-4">{icon}</div>
        <h4 className="font-bold text-lg text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
    </div>
);
