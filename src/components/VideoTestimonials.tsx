import { useState, useRef } from "react";
import { Play } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Javier",
        role: "Permanent Resident",
        video: `${import.meta.env.BASE_URL}assets/videos/testimonial-javier.mp4`
    },
    {
        id: 2,
        name: "Peng Yin",
        role: "Study Permit -> PGWP",
        video: `${import.meta.env.BASE_URL}assets/videos/testimonial-peng-yin.mp4`
    },
    {
        id: 3,
        name: "Yusuf",
        role: "Business Immigration",
        video: `${import.meta.env.BASE_URL}assets/videos/testimonial-yusuf.mp4`
    },
    {
        id: 4,
        name: "Annabelle",
        role: "Study Permit Extension",
        video: `${import.meta.env.BASE_URL}assets/videos/testimonial-anabelle.mp4`
    }
];

// Video Card Component
const VideoCard = ({ testimonial }: { testimonial: { id: number; name: string; role: string; video: string } }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-900 aspect-[9/16]">
            <video
                ref={videoRef}
                src={testimonial.video}
                controls={isPlaying}
                className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-80'}`}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                playsInline
            />

            {!isPlaying && (
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/20 group-hover:bg-black/30 transition-colors z-10"
                    onClick={handlePlay}
                >
                    {/* Play Button */}
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 shadow-xl group-hover:scale-110 transition-transform mb-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-abic-blue">
                            <Play size={24} fill="currentColor" className="ml-1" />
                        </div>
                    </div>

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-left">
                        <h3 className="text-white font-bold text-lg drop-shadow-md">{testimonial.name}</h3>
                        <p className="text-gray-200 text-sm drop-shadow-sm font-medium">{testimonial.role}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

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
                        src={`${import.meta.env.BASE_URL}assets/abic-corporate.mp4`}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((t) => (
                        <VideoCard key={t.id} testimonial={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
