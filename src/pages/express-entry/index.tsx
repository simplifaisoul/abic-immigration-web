import ServiceLayout from "../../components/ServiceLayout";

export { default as ExpressEntryLanding } from "./ExpressEntryLanding";

// Re-export sub-pages (assuming they are in the same folder, though they might not exist as separate files yet based on previous ls. 
// Wait, I saw FSW, CEC, FST exports in the file content I viewed.
// But I didn't check if FSW.tsx etc exist?
// The previous view_file showed them defined INLINE in index.tsx.
// So I should keep them or move them?
// Moving them to separate files is better, but to save time/complexity I can keep them inline for now BUT 
// I should make sure the Landing Page is the DEFAULT export or main entry.
// Actually, the routing likely points to "ExpressEntry" component.
// I will rename the current "ExpressEntry" stub to "ExpressEntryLanding" (which I just created) and export THAT.
// And I will keep the inline sub-pages for now but export them?
// Actually, I should probably creating FSW.tsx, CEC.tsx etc if I want to be consistent.
// But for now, let's just make the index export the landing page properly.

export { default as ExpressEntry } from "./ExpressEntryLanding"; // Default for the route

// Inline components (to be refactored later if needed, or kept as stubs linked from landing)
// Actually, creating a landing page LINKS to /express-entry/fsw etc.
// So we need routes for those.
// If I just export them, do they automatically get routes? 
// The user has a file-based router or manual router?
// I need shorter steps.
// Let's just update the index to export the new landing page and keep the old stubs as named exports so routes don't break.
// But I will replace the "ExpressEntry" component (which was the overview) with my "ExpressEntryLanding".

export const FSW = () => (
    <ServiceLayout title="Federal Skilled Worker (FSW)" subtitle="For skilled workers with foreign work experience." heroImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000">
        <p>Comprehensive Ranking System (CRS) is key. We optimize your points.</p>
    </ServiceLayout>
);

export const CEC = () => (
    <ServiceLayout title="Canadian Experience Class (CEC)" subtitle="For those with Canadian work experience." heroImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000">
        <p>A preferred stream for former international students and temporary foreign workers.</p>
    </ServiceLayout>
);

export const FST = () => (
    <ServiceLayout title="Federal Skilled Trades (FST)" subtitle="For qualified skilled tradespeople." heroImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000">
        <p>Specific trades like chefs, electricians, and construction supervisors may qualify.</p>
    </ServiceLayout>
);
