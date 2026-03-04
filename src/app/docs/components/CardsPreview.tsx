"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Copy,
  Check,
  Code2,
  Eye,
  BookOpen,
  Package,
  Terminal,
} from "lucide-react";
import cardsData from "@/data/Card.json";
import { getCardComponent } from "@/lib/cardRegistry";

interface CardData {
  id: string;
  title: string;
  preview: string;
  code: string;
  how_to_use: string;
  dependencies: string[];
}

const CopyButton = ({
  text,
  label = "Copy",
}: {
  text: string;
  label?: string;
}) => {
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

const CardDemo = ({ id }: { id: string }) => {
  const CardComponent = getCardComponent(id);

  if (!CardComponent) {
    return <span className="text-white/40 text-sm">No demo available</span>;
  }

  return <CardComponent />;
};

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

const PreviewCodeTabs = ({ component }: { component: CardData }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden">
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
      {activeTab === "preview" ? (
        <div className="p-10 flex items-center justify-center min-h-[320px] bg-gradient-to-br from-slate-900/50 to-slate-800/30">
          <CardDemo id={component.id} />
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

function CardsPreview() {
  const searchParams = useSearchParams();
  const componentId = searchParams.get("component");

  if (!componentId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="p-5 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-6">
          <Eye className="w-10 h-10 text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">
          Card Component Preview
        </h2>
        <p className="text-white/50 max-w-md text-sm leading-relaxed">
          Select a card component from the sidebar to see its live preview,
          source code, usage examples, and dependencies.
        </p>
        <div className="flex items-center gap-2 mt-8 text-white/30 text-xs">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>Pick a card component to get started</span>
        </div>
      </div>
    );
  }

  const component = (cardsData as CardData[]).find(
    (card) => card.id === componentId,
  );

  if (!component) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="p-5 rounded-3xl bg-red-500/10 border border-red-500/20 mb-6">
          <Code2 className="w-10 h-10 text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">
          Card Component Not Found
        </h2>
        <p className="text-white/50 max-w-md text-sm leading-relaxed">
          No card component with ID{" "}
          <code className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
            {componentId}
          </code>{" "}
          was found. Try selecting one from the sidebar.
        </p>
      </div>
    );
  }

  const npmDeps = component.dependencies.filter(
    (d) => d !== "react" && d !== "react-dom",
  );
  const npmInstallCmd =
    npmDeps.length > 0 ? `npm install ${npmDeps.join(" ")}` : "";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          {component.title}
        </h1>
        <p className="text-white/40 text-sm">
          Copy-ready card component with live preview, source code, and usage
          example.
        </p>
      </div>

      <PreviewCodeTabs component={component} />
      <div className="rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02] text-white/50 text-sm">
          <BookOpen className="w-4 h-4" />
          <span className="font-medium">How to Use</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold shrink-0 mt-0.5">
                1
              </span>
              <p className="text-sm text-white/60 leading-relaxed">
                Install the required dependencies listed below, then create a
                new file for this card component in your project.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold shrink-0 mt-0.5">
                2
              </span>
              <p className="text-sm text-white/60 leading-relaxed">
                Copy the component code from the{" "}
                <span className="text-blue-400 font-medium">Code</span> tab
                above and paste it into your file.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold shrink-0 mt-0.5">
                3
              </span>
              <p className="text-sm text-white/60 leading-relaxed">
                Import and use the card component in your page like the example
                below:
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-black/30 border border-white/5 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
              <span className="text-xs text-white/30 font-mono">Example</span>
              <CopyButton text={component.how_to_use} />
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm leading-relaxed">
                <code className="text-blue-300/90 font-mono">
                  {component.how_to_use}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0B1120] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02] text-white/50 text-sm">
          <Package className="w-4 h-4" />
          <span className="font-medium">Dependencies</span>
        </div>
        <div className="p-5 space-y-4">
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

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slide-in {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); opacity: 0; }
      50% { transform: translateY(-20px); opacity: 1; }
      100% { transform: translateY(0px); opacity: 0; }
    }
    
    .animate-fade-in {
      animation: fade-in 0.6s ease-out;
    }
    
    .animate-slide-in {
      animation: slide-in 0.5s ease-out;
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
}

export default CardsPreview;
