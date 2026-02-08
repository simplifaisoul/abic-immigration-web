import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function TopUtilityBar() {
    return (
        <div className="bg-abic-blue text-white py-2 px-4 md:px-8 text-sm flex justify-between items-center z-50 relative">
            <div className="hidden md:flex gap-6 font-medium tracking-wide text-xs uppercase opacity-90">
                {/* Optional: Add Policy or Slogan here if needed, otherwise empty space for balance */}
                <span>Canadian Immigration Services — Clear, Strategic, Compliance-First</span>
            </div>

            <div className="flex items-center gap-4 ml-auto">
                <SocialIcon href="#" icon={<Facebook size={16} />} label="Facebook" />
                <SocialIcon href="#" icon={<Instagram size={16} />} label="Instagram" />
                <SocialIcon href="#" icon={<Twitter size={16} />} label="Twitter / X" />
                <SocialIcon href="#" icon={<Linkedin size={16} />} label="LinkedIn" />
                <SocialIcon href="#" icon={<Youtube size={16} />} label="YouTube" />
            </div>
        </div>
    );
}

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-abic-gold transition-colors text-white/80 hover:text-white"
        aria-label={label}
    >
        {icon}
    </a>
);
