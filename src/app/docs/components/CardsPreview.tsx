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
  User,
  Star,
  MapPin,
  Calendar,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Mail,
  Link as LinkIcon,
  Clock,
  Plus,
  Trash2,
  Loader2,
  Crown,
  Sparkles,
} from "lucide-react";
import cardsData from "@/data/Card.json";

interface CardData {
  id: string;
  title: string;
  preview: string;
  code: string;
  how_to_use: string;
  dependencies: string[];
}

/* ─── Copy Button ─── */
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
  const demos: Record<string, React.ReactNode> = {
    "basic-card": (
      <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 max-w-sm">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Welcome</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          This is a simple card component
        </p>
      </div>
    ),
    "card-with-image": (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-all duration-300">
        <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500" />
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Mountain View
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Beautiful mountain landscape
          </p>
        </div>
      </div>
    ),
    "glassmorphism-card": (
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8 rounded-xl">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-6 max-w-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Modern Design</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Frosted glass effect
          </p>
        </div>
      </div>
    ),
    "gradient-card": (
      <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-2xl p-6 shadow-xl max-w-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-50" />
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Elegant gradient design
          </p>
        </div>
      </div>
    ),
    "interactive-card": (
      <div className="bg-white rounded-xl shadow-lg p-6 cursor-pointer border border-slate-200 max-w-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" />
          <ArrowRight className="w-5 h-5 text-slate-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Click Me</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Hover and click effects
        </p>
      </div>
    ),
    "stats-card": (
      <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 max-w-sm hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-slate-600">Total Users</h3>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
            <TrendingUp className="w-3 h-3" />
            +12%
          </div>
        </div>
        <p className="text-2xl font-bold text-slate-900">10,234</p>
      </div>
    ),
    "testimonial-card": (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 max-w-sm hover:shadow-xl transition-all duration-300">
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
          Amazing service!
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
          <div>
            <p className="font-semibold text-slate-900">John Doe</p>
            <p className="text-sm text-slate-600">CEO</p>
          </div>
        </div>
      </div>
    ),
    "pricing-card": (
      <div className="relative group max-w-sm">
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Main card container */}
        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-purple-500/50 shadow-2xl shadow-purple-500/25 p-8 transition-all duration-500">
          {/* Popular badge */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-pulse">
              <Crown className="w-4 h-4" />
              <span>POPULAR</span>
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
              Pro
            </h3>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-black text-white animate-fade-in">
                $29
              </span>
              <span className="text-lg font-medium text-white/70 animate-fade-in">
                /month
              </span>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-4 mb-8 text-white">
            {[
              "Unlimited projects",
              "Priority support",
              "Advanced analytics",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-br from-white/20 to-white/10 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                    <path d="M20 6l-7 7" />
                  </svg>
                </div>
                <span className="font-medium text-white/90 group-hover:scale-105 transition-transform duration-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl">
            {/* Animated button background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </button>
        </div>

        {/* Floating particles */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-amber-400 rounded-full animate-float" />
        <div
          className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-purple-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    ),
    "feature-card": (
      <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 max-w-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 group">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
          <Zap className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Fast Performance
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">Lightning fast</p>
      </div>
    ),
    "profile-card": (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-all duration-300">
        <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500" />
        <div className="relative px-6 pb-6">
          <div className="absolute -top-12 left-6">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-blue-400 to-purple-500" />
          </div>
          <div className="pt-14">
            <h3 className="text-xl font-bold text-slate-900">Alex Smith</h3>
            <p className="text-purple-600 font-medium mb-3">Designer</p>
            <p className="text-slate-600 text-sm mb-4">Creative designer</p>
            <div className="flex items-center gap-2 text-slate-600 text-sm">
              <Mail className="w-4 h-4" />
              <span>alex@example.com</span>
            </div>
          </div>
        </div>
      </div>
    ),
    "notification-card": (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-md max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-emerald-900">Success!</h4>
            <p className="text-sm text-emerald-700 mt-1">
              Your changes have been saved
            </p>
          </div>
        </div>
      </div>
    ),
    "event-card": (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500">
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-slate-900">
                Mar 15, 2024
              </span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Tech Conference
          </h3>
          <div className="flex items-center gap-2 text-slate-600 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>San Francisco</span>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
            Register Now
          </button>
        </div>
      </div>
    ),
    "product-card": (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-all duration-300 group">
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100" />
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            25% OFF
          </div>
          <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-slate-600" />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-slate-900 mb-2">
            Wireless Headphones
          </h3>
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <Star className="w-4 h-4 text-slate-300" />
            <span className="text-sm text-slate-600 ml-1">(4.5)</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-slate-900">$299</span>
            <span className="text-sm text-slate-500 line-through">$399</span>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    ),
    "blog-card": (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500">
          <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            React
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
            Getting Started with React
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Learn the basics
          </p>
          <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Mar 1, 2024</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-purple-600 font-medium">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    ),
    "dashboard-card": (
      <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200 max-w-sm hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-slate-600">Revenue</h3>
          <div className="flex items-center gap-1 text-xs font-medium text-emerald-600">
            <TrendingUp className="w-3 h-3" />
            +12.5%
          </div>
        </div>
        <p className="text-2xl font-bold text-slate-900 mb-4">$45,231</p>
        <div className="flex items-end gap-1 h-16">
          {[30, 45, 35, 50, 40, 60].map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-sm"
              style={{ height: `${(value / 60) * 100}%` }}
            />
          ))}
        </div>
      </div>
    ),
  };

  return (
    demos[id] || (
      <span className="text-white/40 text-sm">No demo available</span>
    )
  );
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
const PreviewCodeTabs = ({ component }: { component: CardData }) => {
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

/* ─── Main Cards Preview Component ─── */
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
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          {component.title}
        </h1>
        <p className="text-white/40 text-sm">
          Copy-ready card component with live preview, source code, and usage
          example.
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
          {/* Code snippet */}
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

/* Add CSS animations */
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
