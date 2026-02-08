import ServiceLayout from "../../components/ServiceLayout";
import { Star, Quote } from "lucide-react";
import VideoTestimonials from "../../components/VideoTestimonials";

export default function ClientReviews() {
    return (
        <ServiceLayout
            title="Client Reviews & Testimonials"
            subtitle="Trusted by Clients Since 2017"
            heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="space-y-20">

                {/* 1. INTRO START */}
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        For over 7 years, Above & Beyond Immigration Consultants (ABIC) has assisted clients with study permits, work permits, permanent residence applications, LMIA cases, and professional mentoring. Our commitment to accuracy, transparency, and ethical practice is reflected in consistent client feedback.
                    </p>
                </div>

                {/* 2. VIDEO TESTIMONIALS (Restored) */}
                <VideoTestimonials />

                {/* 3. FEATURED TEXT REVIEWS */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-montserrat">Featured Written Reviews</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ReviewCard
                            name="Xin Zhang"
                            year="2025"
                            text="Anthony has been really helpful in my case, with his patience and expertise! Highly recommended!"
                            featured
                        />
                        <ReviewCard
                            name="Preet Sandhu"
                            year="2025"
                            text="I had the privilege of being mentored by Anthony, an outstanding immigration consultant whose guidance and expertise were invaluable."
                            featured
                        />
                        <ReviewCard
                            name="Ron T"
                            year="2019"
                            text="Experienced consultant who truly understands the immigration system."
                            featured
                        />
                    </div>
                </section>

                <hr className="border-gray-100" />

                {/* 4. MORE CLIENT STORIES */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-montserrat">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ReviewCard name="Lynn Garfin" year="2021" text="Very knowledgeable and professional. Always takes time to explain all available options clearly." />
                        <ReviewCard name="Alan De Zilva" year="2019" text="Ethical, honest, and transparent. No false promises." />
                        <ReviewCard name="Kristel Estefani" year="2021" text="Superb knowledge and always submits on time. All our visas were approved." />
                        <ReviewCard name="Thompson Feng" year="2020" text="Highly experienced consultant with deep understanding of immigration policies and regulations." />
                        <ReviewCard name="Lynn Garfin" year="2021" text="Very professional and easy to talk to. He takes time to sit down and explain everything." />
                        <ReviewCard name="Gary Rohilla" year="2020" text="Transparent, genuine, and very thorough in preparing cases." />
                        <ReviewCard name="Abie Balana" year="2021" text="Always willing to help and go the extra mile." />
                        <ReviewCard name="Smriti Sharma" year="2019" text="Best place in GTA for immigration services. Highly recommended." />
                        <ReviewCard name="Wan Teng Wu" year="2019" text="Trustworthy, reliable, and extremely knowledgeable." />
                        <ReviewCard name="Sahil Sayal" year="2019" text="Clear advice with realistic expectations and no exaggeration." />
                        <ReviewCard name="Michael Zhou" year="2019" text="Excellent mentor and professional consultant." />
                        <ReviewCard name="Jerry Lim" year="2019" text="Strong attention to detail and excellent follow-up." />
                        <ReviewCard name="Anand Manohar" year="2018" text="Worth every penny spent for professional immigration guidance." />
                        <ReviewCard name="Sunday Onoja" year="2019" text="Explains complex immigration rules clearly and patiently." />
                    </div>
                </section>

                {/* 5. TRUST INDICATOR (Redesigned) */}
                <div className="bg-gradient-to-br from-gray-900 to-abic-blue text-white p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10">
                        <div className="flex justify-center gap-2 text-abic-gold mb-6">
                            <Star fill="currentColor" size={32} />
                            <Star fill="currentColor" size={32} />
                            <Star fill="currentColor" size={32} />
                            <Star fill="currentColor" size={32} />
                            <Star fill="currentColor" size={32} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">Rated by Clients Since 2017</h3>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-white/90">
                            <span className="bg-white/10 px-4 py-2 rounded-full">Transparent</span>
                            <span className="bg-white/10 px-4 py-2 rounded-full">Ethical</span>
                            <span className="bg-white/10 px-4 py-2 rounded-full">Professional</span>
                        </div>
                    </div>
                </div>

            </div>
        </ServiceLayout>
    );
}

const ReviewCard = ({ name, year, text, featured }: any) => (
    <div className={`p-6 rounded-2xl ${featured ? 'bg-white shadow-xl border border-gray-100 scale-105' : 'bg-gray-50'}`}>
        <div className="flex gap-1 text-yellow-400 mb-4">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
        </div>
        <Quote className="text-gray-300 mb-4" size={32} />
        <p className="text-gray-700 italic mb-6 leading-relaxed">"{text}"</p>
        <div>
            <p className="font-bold text-gray-900">{name}</p>
            <p className="text-xs text-gray-400">{year}</p>
        </div>
    </div>
);
