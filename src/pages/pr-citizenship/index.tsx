export { default as PRCitizenship } from "./PRCitizenshipLanding";
export { default as PR } from "./PR";
export { default as Citizenship } from "./Citizenship";

import ServiceLayout from "../../components/ServiceLayout";
const HERO_IMAGE = "https://images.unsplash.com/photo-1548126466-4470dfd3a209?auto=format&fit=crop&q=80&w=2000";

export const PRCitizenshipLanding = () => (
    <ServiceLayout title="PR & Citizenship" subtitle="Building your permanent life in Canada." heroImage={HERO_IMAGE}>
        <div className="grid md:grid-cols-2 gap-8">
            <a href="/pr-citizenship/pr" className="p-8 bg-gray-50 rounded-2xl border hover:border-abic-blue transition-all group">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-abic-blue">Permanent Residence</h3>
                <p>Explore over 80 pathways to becoming a Permanent Resident of Canada.</p>
            </a>
            <a href="/pr-citizenship/citizenship" className="p-8 bg-gray-50 rounded-2xl border hover:border-abic-gold transition-all group">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-abic-gold">Canadian Citizenship</h3>
                <p>Take the final step: Apply for your passport and full voting rights.</p>
            </a>
        </div>
    </ServiceLayout>
);
