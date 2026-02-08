import ServiceLayout from "./ServiceLayout";

export default function PlaceholderPage({ title }: { title: string }) {
    return (
        <ServiceLayout
            title={title}
            subtitle="This page is currently under construction."
            heroImage="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=2000"
        >
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-400">Content Coming Soon</h2>
                <p className="mt-4 text-gray-500">We are currently updating our website content to serve you better.</p>
            </div>
        </ServiceLayout>
    );
}
