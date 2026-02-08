import ServiceLayout from "../../components/ServiceLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1548126466-4470dfd3a209?auto=format&fit=crop&q=80&w=2000";

export const PRCitizenship = () => (
    <ServiceLayout title="PR & Citizenship Overview" subtitle="Your permanent home in Canada." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">From Temporary to Permanent</h3>
    </ServiceLayout>
);

export const PR = () => (
    <ServiceLayout title="Permanent Residence" subtitle="Enjoy the rights and freedoms of PR status." heroImage={HERO_IMAGE}>
        <p>There are over 80 pathways to PR. We find the right one for you.</p>
    </ServiceLayout>
);

export const Citizenship = () => (
    <ServiceLayout title="Canadian Citizenship" subtitle="The final step in your immigration journey." heroImage={HERO_IMAGE}>
        <p>Apply for your Canadian passport and full voting rights after meeting residency obligations.</p>
    </ServiceLayout>
);
