"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  Copy,
  Check,
  Code2,
  Eye,
  BookOpen,
  Package,
  Terminal,
  Heart,
  Loader2,
  Trash2,
  CheckCircle,
  Plus,
  ArrowRight,
} from "lucide-react";
import buttonsData from "@/data/Button.json";

interface ButtonData {
  id: string;
  title: string;
  preview: string;
  code: string;
  how_to_use: string;
  dependencies: string[];
}

/* ─── Copy Button ─── */
const CopyButton = ({ text, label = "Copy" }: { text: string; label?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-400">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

/* ─── Live Button Demos ─── */
const ButtonDemo = ({ id }: { id: string }) => {
  const demos: Record<string, React.ReactNode> = {
    "primary-button": (
      <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/40 active:scale-[0.97] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Get Started
      </button>
    ),
    "secondary-button": (
      <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 hover:border-indigo-300 active:scale-[0.97] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Learn More
      </button>
    ),
    "outline-button": (
      <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 bg-transparent border-2 border-slate-500 rounded-lg hover:bg-slate-800 hover:border-slate-400 hover:text-white active:scale-[0.97] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
        View Details
      </button>
    ),
    "ghost-button": (
      <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-400 bg-transparent rounded-lg hover:bg-slate-800 hover:text-white active:scale-[0.97] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
        Cancel
      </button>
    ),
    "icon-button": (
      <button className="inline-flex items-center justify-center w-10 h-10 text-slate-400 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white active:scale-[0.90] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
        <Heart className="w-5 h-5" />
      </button>
    ),
    "loading-button": (
      <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-violet-600 rounded-lg shadow-md shadow-violet-500/25 opacity-70 cursor-not-allowed">
        <Loader2 className="w-4 h-4 animate-spin" />
        Submitting...
      </button>
    ),
    "gradient-button": (
      <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:brightness-110 active:scale-[0.97] transition-all duration-300">
        Upgrade Plan
      </button>
    ),
    "glass-button": (
      <div className="bg-gradient-to-br from-purple-700 to-blue-900 p-8 rounded-xl">
        <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 hover:bg-white/20 hover:border-white/30 hover:shadow-xl active:scale-[0.97] transition-all duration-300">
          Explore
        </button>
      </div>
    ),
    "neon-glow-button": (
      <div className="bg-slate-950 p-8 rounded-xl flex gap-3">
        <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold tracking-widest uppercase bg-transparent border-2 rounded-lg text-cyan-400 border-cyan-400 shadow-[0_0_15px] shadow-cyan-500/50 hover:shadow-cyan-500/80 hover:bg-cyan-400/10 transition-all duration-300 active:scale-[0.95]">
          Enter
        </button>
        <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold tracking-widest uppercase bg-transparent border-2 rounded-lg text-purple-400 border-purple-400 shadow-[0_0_15px] shadow-purple-500/50 hover:shadow-purple-500/80 hover:bg-purple-400/10 transition-all duration-300 active:scale-[0.95]">
          Launch
        </button>
      </div>
    ),
    "animated-border-button": (
      <div className="bg-slate-950 p-8 rounded-xl">
        <button className="relative inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden group hover:scale-[1.02] active:scale-[0.97] transition-transform duration-200">
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-md opacity-60 animate-spin" style={{ animationDuration: "3s" }} />
          <span className="relative z-10 flex items-center justify-center gap-2 px-5 py-2 bg-slate-950 rounded-[10px] w-full h-full">
            Discover
          </span>
        </button>
      </div>
    ),
    "3d-press-button": (
      <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-emerald-500 rounded-xl border-b-[4px] border-emerald-700 shadow-lg hover:brightness-110 hover:translate-y-[-1px] hover:border-b-[5px] hover:shadow-xl active:translate-y-[2px] active:border-b-[2px] active:shadow-md transition-all duration-150">
        Press Me
      </button>
    ),
    "expand-on-hover-button": (
      <button className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-full overflow-hidden hover:shadow-xl hover:shadow-slate-900/25 hover:px-8 active:scale-[0.97] transition-all duration-300">
        <span>Read More</span>
        <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
      </button>
    ),
    "floating-action-button": (
      <button className="inline-flex items-center justify-center w-14 h-14 text-white bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:scale-110 hover:rotate-90 active:scale-90 transition-all duration-300">
        <Plus className="w-6 h-6" />
      </button>
    ),
    "destructive-button": (
      <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-red-600 rounded-lg shadow-md shadow-red-500/25 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/35 active:scale-[0.97] transition-all duration-200">
        <Trash2 className="w-4 h-4" />
        Delete Account
      </button>
    ),
    "success-button": (
      <button className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 rounded-lg shadow-md shadow-emerald-500/25 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/35 active:scale-[0.97] transition-all duration-200">
        <CheckCircle className="w-4 h-4" />
        Confirm Order
      </button>
    ),
  };

  return demos[id] || <span className="text-white/40 text-sm">No demo available</span>;
};

/* ─── Code Block ─── */
const CodeBlock = ({
  code,
  label,
  icon,
}: {
  code: string;
  label: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2 text-white/50 text-sm">
          {icon}
          <span className="font-medium">{label}</span>
        </div>
        <CopyButton text={code} />
      </div>
      <div className="p-5 overflow-x-auto">
        <pre className="text-sm leading-relaxed">
          <code className="text-blue-300/90 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
};

/* ─── Tabbed Preview + Code Box ─── */
const PreviewCodeTabs = ({ component }: { component: ButtonData }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden">
      {/* Tab Header */}
      <div className="flex items-center justify-between px-2 py-2 border-b border-white/5 bg-white/[0.02]">
        <div className="flex">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "preview"
                ? "bg-blue-500/15 text-blue-400"
                : "text-white/40 hover:text-white/70 hover:bg-white/5"
            }`}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "code"
                ? "bg-blue-500/15 text-blue-400"
                : "text-white/40 hover:text-white/70 hover:bg-white/5"
            }`}
          >
            <Code2 className="w-4 h-4" />
            Code
          </button>
        </div>
        {activeTab === "code" && <CopyButton text={component.code} />}
      </div>

      {/* Tab Content */}
      {activeTab === "preview" ? (
        <div className="p-10 flex items-center justify-center min-h-[220px] bg-gradient-to-br from-slate-900/50 to-slate-800/30">
          <ButtonDemo id={component.id} />
        </div>
      ) : (
        <div className="p-5 overflow-x-auto max-h-[500px] overflow-y-auto">
          <pre className="text-sm leading-relaxed">
            <code className="text-blue-300/90 font-mono">{component.code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

/* ─── Welcome State ─── */
const WelcomeState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="p-5 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-6">
        <Eye className="w-10 h-10 text-blue-400" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-3">
        Component Preview
      </h2>
      <p className="text-white/50 max-w-md text-sm leading-relaxed">
        Select a component from the sidebar to see its live preview,
        source code, usage examples, and dependencies.
      </p>
      <div className="flex items-center gap-2 mt-8 text-white/30 text-xs">
        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span>Pick a component to get started</span>
      </div>
    </div>
  );
};

/* ─── Not Found State ─── */
const NotFoundState = ({ id }: { id: string }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="p-5 rounded-3xl bg-red-500/10 border border-red-500/20 mb-6">
        <Code2 className="w-10 h-10 text-red-400" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-3">
        Component Not Found
      </h2>
      <p className="text-white/50 max-w-md text-sm leading-relaxed">
        No component with ID{" "}
        <code className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
          {id}
        </code>{" "}
        was found. Try selecting one from the sidebar.
      </p>
    </div>
  );
};

/* ─── Main Preview Component ─── */
function Preview() {
  const searchParams = useSearchParams();
  const componentId = searchParams.get("component");

  if (!componentId) {
    return <WelcomeState />;
  }

  const component = (buttonsData as ButtonData[]).find(
    (btn) => btn.id === componentId
  );

  if (!component) {
    return <NotFoundState id={componentId} />;
  }

  const npmDeps = component.dependencies.filter(
    (d) => d !== "react" && d !== "react-dom"
  );
  const npmInstallCmd = npmDeps.length > 0 ? `npm install ${npmDeps.join(" ")}` : "";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          {component.title}
        </h1>
        <p className="text-white/40 text-sm">
          Copy-ready component with live preview, source code, and usage example.
        </p>
      </div>

      {/* Tabbed Preview + Code */}
      <PreviewCodeTabs component={component} />

      {/* How to Use — Advice */}
      <div className="rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02] text-white/50 text-sm">
          <BookOpen className="w-4 h-4" />
          <span className="font-medium">How to Use</span>
        </div>
        <div className="p-5 space-y-4">
          {/* Steps */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold shrink-0 mt-0.5">1</span>
              <p className="text-sm text-white/60 leading-relaxed">
                Install the required dependencies listed below, then create a new file for this component in your project.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold shrink-0 mt-0.5">2</span>
              <p className="text-sm text-white/60 leading-relaxed">
                Copy the component code from the <span className="text-blue-400 font-medium">Code</span> tab above and paste it into your file.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold shrink-0 mt-0.5">3</span>
              <p className="text-sm text-white/60 leading-relaxed">
                Import and use the component in your page like the example below:
              </p>
            </div>
          </div>
          {/* Code snippet */}
          <div className="rounded-xl bg-black/30 border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
              <span className="text-xs text-white/30 font-mono">Example</span>
              <CopyButton text={component.how_to_use} />
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm leading-relaxed">
                <code className="text-blue-300/90 font-mono">{component.how_to_use}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Dependencies */}
      <div className="rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02] text-white/50 text-sm">
          <Package className="w-4 h-4" />
          <span className="font-medium">Dependencies</span>
        </div>
        <div className="p-5 space-y-4">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {component.dependencies.map((dep) => (
              <span
                key={dep}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"
              >
                {dep}
              </span>
            ))}
          </div>

          {/* npm install command */}
          {npmInstallCmd && (
            <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/30 border border-white/5">
              <div className="flex items-center gap-2 overflow-x-auto">
                <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                <code className="text-sm font-mono text-emerald-300/90 whitespace-nowrap">
                  {npmInstallCmd}
                </code>
              </div>
              <CopyButton text={npmInstallCmd} label="Copy" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Preview;
