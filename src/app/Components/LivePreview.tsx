"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Monitor, Layout, Play, RefreshCcw } from "lucide-react";

export default function LivePreview() {
    const [copied, setCopied] = useState(false);
    const [activeView, setActiveView] = useState<"preview" | "code">("preview");

    const codeSnippet = `import { useForm } from "@pharaon/hooks";
import { z } from "zod";

const Schema = z.object({
  email: z.string().email("Invalid email address"),
});

export const JoinWaitlist = () => {
  const { register, handleSubmit } = useForm({ schema: Schema });
  
  return (
    <Card className="p-6 bg-white/5 border-white/10">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Input {...register("email")} placeholder="Enter email" />
        <Button variant="primary">Join Waitlist</Button>
      </form>
    </Card>
  );
};`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#05070a]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-blue-500 font-semibold tracking-wider text-sm uppercase">Live Playground</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Experience the Power of NovaUI</h3>
                    <p className="text-lg text-gray-400">
                        See how NovaUI components work together to create production-ready experiences with built-in validation and premium styling.
                    </p>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    {/* Main Container */}
                    <div className="bg-[#0c1015] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Header / Tabs */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0f141a]">
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={() => setActiveView("preview")}
                                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${activeView === "preview" ? "text-blue-400" : "text-gray-500 hover:text-gray-300"}`}
                                >
                                    <Monitor size={16} />
                                    Live Preview
                                </button>
                                <button
                                    onClick={() => setActiveView("code")}
                                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${activeView === "code" ? "text-blue-400" : "text-gray-500 hover:text-gray-300"}`}
                                >
                                    <Terminal size={16} />
                                    Source Code
                                </button>
                            </div>
                            <button
                                onClick={copyToClipboard}
                                className="p-2 text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-xs"
                            >
                                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                                {copied ? "Copied!" : "Copy Snippet"}
                            </button>
                        </div>

                        {/* Display Area */}
                        <div className="grid lg:grid-cols-5 min-h-[500px]">
                            {/* Content Panel */}
                            <div className="lg:col-span-3 p-6 md:p-8 bg-[#0c1015] flex items-center justify-center relative overflow-hidden">
                                {activeView === "preview" ? (
                                    <div className="w-full max-w-sm space-y-8 animate-in fade-in zoom-in-95 duration-500">
                                        <div className="space-y-4">
                                            <div className="p-8 rounded-3xl bg-white/2 border border-white/10 backdrop-blur-xl shadow-2xl relative group overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                                    <Layout size={60} />
                                                </div>
                                                <div className="relative z-10 space-y-6 text-center">
                                                    <div className="inline-block p-3 rounded-2xl bg-blue-600/20 text-blue-400 mb-2">
                                                        <Sparkles size={24} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <h4 className="text-xl font-bold text-white">Join the Community</h4>
                                                        <p className="text-xs text-gray-500">Be the first to get access to NovaUI Pro.</p>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div className="relative">
                                                            <input
                                                                type="email"
                                                                placeholder="hello@example.com"
                                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                                            />
                                                        </div>
                                                        <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                                                            Get Early Access
                                                            <ArrowRight size={16} />
                                                        </button>
                                                    </div>
                                                    <p className="text-[10px] text-gray-600">No credit card required. 100% free.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <pre className="p-6 text-blue-200/90 text-sm font-mono overflow-auto w-full h-full animate-in fade-in duration-300">
                                        <code>{codeSnippet}</code>
                                    </pre>
                                )}
                            </div>

                            {/* Sidebar / Info Panel */}
                            <div className="lg:col-span-2 p-8 bg-[#0f141a] border-l border-white/5 space-y-8">
                                <div className="space-y-6">
                                    <h4 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                        <Play size={14} className="text-blue-500" />
                                        How it works
                                    </h4>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-semibold text-white">Define your Schema</p>
                                                <p className="text-xs text-gray-500">Use Zod to create strict type definitions for your UI state and forms.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-semibold text-white">Infinite Customization</p>
                                                <p className="text-xs text-gray-500">Atomic components with full support for Tailwind CSS design tokens.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-semibold text-white">Reactive Validation</p>
                                                <p className="text-xs text-gray-500">Real-time feedback as your users type. No custom boilerplate needed.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-blue-400 transition-colors">
                                        <RefreshCcw size={14} />
                                        Reset Playground
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative bits */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-600/20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
}

// Internal reusable components needed by LivePreview
const Sparkles = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
);

const ArrowRight = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);