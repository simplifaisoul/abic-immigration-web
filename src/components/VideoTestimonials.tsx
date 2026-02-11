
const testimonials = [
    {
        id: 1,
        name: "Javier",
        role: "Permanent Resident",
        video: "/assets/videos/testimonial-javier.mp4"
    },
    {
        id: 2,
        name: "Peng Yin",
        role: "Study Permit -> PGWP",
        video: "/assets/videos/testimonial-peng-yin.mp4"
    },
    {
        id: 3,
        name: "Yusuf",
        role: "Business Immigration",
        video: "/assets/videos/testimonial-yusuf.mp4"
    },
    {
        id: 4,
        name: "Annabelle",
        role: "Study Permit Extension",
        video: "/assets/videos/testimonial-anabelle.mp4"
    }
];

export default function VideoTestimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-abic-red font-bold uppercase tracking-widest text-sm">Success Stories</span>
                    <h2 className="text-4xl font-montserrat font-bold text-gray-900 mt-2">Real People. Real Results.</h2>
                </div>

                {/* Corporate Video Feature */}
                <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-black relative aspect-video max-w-5xl mx-auto">
                    <video
                        className="w-full h-full object-cover"
                        controls
                        src="/assets/abic-corporate.mp4"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t) => (
                        <div key={t.id} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="aspect-[9/16] bg-gray-900 relative">
                                <video
                                    src={t.video}
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                                <h3 className="text-white font-bold text-lg">{t.name}</h3>
                                <p className="text-gray-300 text-sm">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
