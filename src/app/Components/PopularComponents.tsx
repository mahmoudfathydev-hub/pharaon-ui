"use client";

import { MousePointer2, Type, CreditCard, Layers, Smartphone, Mouse } from "lucide-react";

interface ComponentPreview {
    name: string;
    description: string;
    count: number;
    icon: React.ReactNode;
    tags: string[];
}

const components: ComponentPreview[] = [
    {
        name: "Buttons",
        description: "Multi-variant buttons with loading states and icon integration.",
        count: 12,
        icon: <MousePointer2 className="w-6 h-6" />,
        tags: ["Ghost", "Outline", "Gradient"],
    },
    {
        name: "Inputs",
        description: "Type-safe input fields with built-in validation messages.",
        count: 8,
        icon: <Type className="w-6 h-6" />,
        tags: ["Password", "Date", "Search"],
    },
    {
        name: "Cards",
        description: "Premium content containers with image and action supports.",
        count: 6,
        icon: <CreditCard className="w-6 h-6" />,
        tags: ["Glass", "Border", "Elevated"],
    },
    {
        name: "Modals",
        description: "Accessible dialogs and overlays with smooth transitions.",
        count: 4,
        icon: <Layers className="w-6 h-6" />,
        tags: ["Sheet", "Dialog", "Popover"],
    },
    {
        name: "Navigation",
        description: "Responsive navbars, sidebars and breadcrumb systems.",
        count: 10,
        icon: <Smartphone className="w-6 h-6" />,
        tags: ["Sidebar", "Menu", "Tabs"],
    },
    {
        name: "Indicators",
        description: "Badges, progress bars and status indicators for apps.",
        count: 15,
        icon: <Mouse className="w-6 h-6" />,
        tags: ["Badge", "Step", "Spinner"],
    },
];

const ComponentCard = ({ comp }: { comp: ComponentPreview }) => {
    return (
        <div className="group p-6 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300">
            <div className="space-y-6">
                <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {comp.icon}
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 bg-white/5 px-2 py-1 rounded-full uppercase tracking-widest leading-none">
                        {comp.count} Variants
                    </span>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">{comp.name}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed italic">{comp.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {comp.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] text-gray-400 font-medium">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function PopularComponents() {
    return (
        <section id="components" className="py-24 bg-[#05070a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl space-y-4">
                        <h2 className="text-blue-500 font-semibold tracking-wider text-sm uppercase">Library</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">Top-Tier Components</h3>
                        <p className="text-lg text-gray-400 italic font-mono">
                            Handcrafted components that solve complex UI challenges.
                        </p>
                    </div>
                    <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold rounded-xl transition-all">
                        View All 80+ Components
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {components.map((comp, idx) => (
                        <ComponentCard key={idx} comp={comp} />
                    ))}
                </div>
            </div>
        </section>
    );
}