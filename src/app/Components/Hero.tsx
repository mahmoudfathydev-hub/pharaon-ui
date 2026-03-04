"use client";

import { ArrowRight, Code2, Globe, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const CodePreviewCard = () => {
    const [activeTab, setActiveTab] = useState<"code" | "preview">("code");
    const [displayText, setDisplayText] = useState("");
    const fullCode = `const UserSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
});

<Form schema={UserSchema}>
    <Input name="email" />
    <Button type="submit">
        Register
    </Button>
</Form>`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(fullCode.slice(0, i));
            i++;
            if (i > fullCode.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative group w-full max-w-xl">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-[#0c1015] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0f141a]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    </div>
                    <div className="flex bg-white/5 rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab("code")}
                            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === "code" ? "bg-white/10 text-white shadow-sm" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            Code
                        </button>
                        <button
                            onClick={() => setActiveTab("preview")}
                            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === "preview" ? "bg-white/10 text-white shadow-sm" : "text-gray-500 hover:text-gray-300"}`}
                        >
                            Preview
                        </button>
                    </div>
                </div>
                <div className="p-6 h-70 overflow-hidden font-mono text-sm leading-relaxed">
                    {activeTab === "code" ? (
                        <pre className="text-gray-300">
                            <code className="block">
                                {displayText}
                                <span className="inline-block w-1.5 h-4 bg-blue-500 animate-pulse ml-0.5"></span>
                            </code>
                        </pre>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full space-y-4 animate-in fade-in duration-500">
                            <div className="w-full max-w-xs space-y-3">
                                <div className="h-4 w-20 bg-white/5 rounded-md"></div>
                                <div className="h-10 w-full bg-white/5 border border-white/10 rounded-xl"></div>
                                <button className="w-full h-10 bg-blue-600 text-white font-semibold cursor-pointer rounded-xl shadow-lg shadow-blue-500/20">
                                    Register
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-500 flex items-center gap-1">
                                <ShieldCheck size={12} className="text-emerald-500" />
                                Validated with Zod
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-20 w-72 md:w-96 h-72 md:h-96 bg-cyan-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold animate-in slide-in-from-top duration-700">
                        <Sparkles size={14} />
                        <span>Introducing Pharon-UI v1.0</span>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                            Build Type-Safe UIs <br />
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-300">
                                at Warp Speed
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                            The modern React component library with built-in Zod validation, clean architecture, and copy-ready code blocks. Production-ready by default.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2">
                            Start Building
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                            <Code2 size={20} className="text-blue-400" />
                            Explore Components
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-white font-semibold italic">
                                <Zap size={16} className="text-amber-400" />
                                Next.js 16+
                            </div>
                            <p className="text-xs text-gray-500">Fully compatible with App Router</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-white font-semibold italic">
                                <ShieldCheck size={16} className="text-emerald-400" />
                                Type-Safe
                            </div>
                            <p className="text-xs text-gray-500">First-class Zod integration</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-white font-semibold italic">
                                <Globe size={16} className="text-cyan-400" />
                                A11y First
                            </div>
                            <p className="text-xs text-gray-500">WCAG 2.1 compliant out of the box</p>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center animate-in slide-in-from-right duration-1000 delay-300">
                    <CodePreviewCard />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-linear-to-tr from-cyan-500/10 to-transparent rounded-full border border-white/5 backdrop-blur-2xl animate-pulse duration-7000 lg:block hidden"></div>
                </div>
            </div>
        </section>
    );
}