import ServiceLayout from "../../components/ServiceLayout";

const HERO_IMAGE = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000";

export const ExpressEntry = () => (
    <ServiceLayout title="Express Entry Overview" subtitle="Canada's primary PR selection system." heroImage={HERO_IMAGE}>
        <h3 className="text-xl font-bold">Fast-track to Canada</h3>
    </ServiceLayout>
);

export const FSW = () => (
    <ServiceLayout title="Federal Skilled Worker (FSW)" subtitle="For skilled workers with foreign work experience." heroImage={HERO_IMAGE}>
        <p>Comprehensive Ranking System (CRS) is key. We optimize your points.</p>
    </ServiceLayout>
);

export const CEC = () => (
    <ServiceLayout title="Canadian Experience Class (CEC)" subtitle="For those with Canadian work experience." heroImage={HERO_IMAGE}>
        <p>A preferred stream for former international students and temporary foreign workers.</p>
    </ServiceLayout>
);

export const FST = () => (
    <ServiceLayout title="Federal Skilled Trades (FST)" subtitle="For qualified skilled tradespeople." heroImage={HERO_IMAGE}>
        <p>Specific trades like chefs, electricians, and construction supervisors may qualify.</p>
    </ServiceLayout>
);
