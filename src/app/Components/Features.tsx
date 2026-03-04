"use client";

import {
  Shield,
  Zap,
  Palette,
  Accessibility,
  Code,
  Layout,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    title: "Type-Safe by Design",
    description:
      "Built-in Zod validation ensures your data is consistent from form to backend. No more runtime surprises.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Warp Performance",
    description:
      "Optimized for Next.js 16 and Turbopack. Zero-runtime CSS and minimal bundle size for maximum speed.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Theming Engine",
    description:
      "Extremely flexible design tokens. Easily adapt NovaUI to your brand with full Tailwind CSS support.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Accessibility First",
    description:
      "WCAG 2.1 compliant components. Screen reader support and keyboard navigation baked into every piece.",
    icon: <Accessibility className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Developer Experience",
    description:
      "Clean architecture, copy-paste snippets, and comprehensive docs designed for elite teams.",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Responsive Layouts",
    description:
      "Built-in responsiveness for every component. Looks stunning on everything from mobile to ultrawide.",
    icon: <Layout className="w-6 h-6" />,
    color: "from-rose-500 to-red-500",
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="group relative p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:bg-white/5 transition-all duration-500 hover:-translate-y-2">
      <div
        className={`absolute -inset-px bg-linear-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
      ></div>
      <div className="relative z-10 space-y-4">
        <div
          className={`w-12 h-12 rounded-2xl bg-linear-to-r ${feature.color} flex items-center justify-center text-white shadow-lg shadow-black/20`}
        >
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 bg-[#05070a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20 space-y-4">
          <h2 className="text-blue-500 font-semibold tracking-wider text-sm uppercase px-1">
            Features
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Engineered for the <br />
            <span className="text-gray-500">Modern Web</span>
          </h3>
          <p className="text-lg text-gray-400">
            NovaUI isn&apos;t just another component library. It&apos;s a
            technical foundation for building high-scale, type-safe web
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-500/5 rounded-full blur-[80px] md:blur-[160px] pointer-events-none"></div>
    </section>
  );
}
