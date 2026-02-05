import ServiceLayout from "../../components/ServiceLayout";
import VideoTestimonials from "../../components/VideoTestimonials";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
    return (
        <ServiceLayout
            title="Client Reviews"
            subtitle="Don't just take our word for it. Hear from the people we've helped settle in Canada."
            heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
            <div className="space-y-16">

                {/* Video Section Reuse */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 font-montserrat">Success Stories</h2>
                        <p className="text-gray-600 mt-4">Real clients, real results.</p>
                    </div>
                    {/* We reuse the component but might need to adjust it if it has hardcoded titles. 
                        It has a title inside it, so it might duplicate. Let's wrap it nicely. 
                    */}
                    <div className="bg-gray-50 rounded-3xl p-4 md:p-8">
                        <div className="[&>section]:py-0 [&>section]:bg-transparent">
                            <VideoTestimonials />
                        </div>
                    </div>
                </section>

                {/* Text Reviews Grid */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-montserrat">Recent Feedback</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ReviewCard
                            name="Sarah M."
                            pathway="Study Permit"
                            text="Anthony made the entire process so simple. I was so worried about my study permit extension after a refusal, but he handled it perfectly."
                        />
                        <ReviewCard
                            name="Rajesh K."
                            pathway="Express Entry (CEC)"
                            text="Professional, honest, and very knowledgeable. I got my PR in 6 months thanks to the guidance from ABIC. Highly recommended!"
                        />
                        <ReviewCard
                            name="Elena V."
                            pathway="Spousal Sponsorship"
                            text="We were reunited in Canada faster than we expected. The team was always available to answer our questions."
                        />
                        <ReviewCard
                            name="Liu Wei"
                            pathway="PGWP"
                            text="Detailed and thorough. They caught a mistake in my documents that could have caused a rejection. Thank you Anthony!"
                        />
                        <ReviewCard
                            name="Ahmed S."
                            pathway="Visitor Visa"
                            text="I applied for my parents twice and failed. ABIC helped me build a strong case and they are finally here visiting their grandkids."
                        />
                        <ReviewCard
                            name="Maria G."
                            pathway="Work Permit"
                            text="Excellent service. They know the ins and outs of the system. Worth every penny for the peace of mind."
                        />
                    </div>
                </section>

            </div>
        </ServiceLayout>
    );
}

const ReviewCard = ({ name, pathway, text }: any) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative hover:shadow-lg transition-shadow">
        <Quote className="absolute top-6 right-6 text-gray-100" size={48} />
        <div className="flex gap-1 mb-4 text-orange-400">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
        </div>
        <p className="text-gray-600 italic mb-6 relative z-10">"{text}"</p>
        <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{pathway}</p>
        </div>
    </div>
);
