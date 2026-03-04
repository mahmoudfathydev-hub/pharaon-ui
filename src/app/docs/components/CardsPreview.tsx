"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Code2, Eye, BookOpen, Package, Terminal, Heart, User, Star, MapPin, Calendar, TrendingUp, TrendingDown, ShoppingCart, CheckCircle, AlertCircle, Info, X, ArrowRight, Zap, Shield, Globe, Mail, Link as LinkIcon, Clock, Plus, Trash2, Loader2, Crown, Sparkles, Quote, Share2, Github, Twitter, Linkedin, Activity, BarChart3, ArrowUp, ArrowDown, Bookmark, Eye as EyeIcon,} from "lucide-react";
import cardsData from "@/data/Card.json";

interface CardData {id: string;title: string;preview: string;code: string;how_to_use: string;dependencies: string[];
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
  const demos: Record<string, React.ReactNode> = {
    "basic-card": (
      <div className="relative group max-w-sm">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-blue-500/50 shadow-2xl shadow-blue-500/25 p-8 transition-all duration-500">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
              Welcome
            </h3>
          </div>

          <div className="text-white/90 text-center leading-relaxed">
            This is a simple animated card
          </div>
          <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl mt-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </button>
        </div>

        <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-float" />
        <div
          className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-pink-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    ),
    "card-with-image": (
      <div className="relative group max-w-sm"> 
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-emerald-500/50 shadow-2xl shadow-emerald-500/25 overflow-hidden transition-all duration-500">
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
                Mountain View
              </h3>
            </div>

            <div className="text-white/90 text-center leading-relaxed">
              Beautiful mountain landscape
            </div>
            <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore More
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
              </span>
            </button>
          </div>
        </div>
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-emerald-400 rounded-full animate-float" />
        <div
          className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    ),
    "glassmorphism-card": (
      <div className="relative group max-w-sm">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-amber-500/50 shadow-2xl shadow-amber-500/25 p-8 transition-all duration-500">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-pulse">
              <Sparkles className="w-3 h-3" />
              <span>GLASS</span>
              <Crown className="w-4 h-4" />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
              Modern Design
            </h3>
          </div>

          <div className="text-white/90 text-center leading-relaxed">
            Frosted glass effect
          </div>

          <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl mt-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              Try It Now
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </button>
        </div>
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-amber-400 rounded-full animate-float" />
        <div
          className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-red-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    ),
    "gradient-card": (
      <div className="relative group max-w-sm">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-violet-500/50 shadow-2xl shadow-violet-500/25 p-8 transition-all duration-500">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-pulse">
              <Crown className="w-4 h-4" />
              <span>PREMIUM</span>
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
              Premium
            </h3>
          </div>

          <div className="text-white/90 text-center leading-relaxed">
            Elegant gradient design
          </div>

          <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl mt-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              Upgrade Now
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </button>
        </div>
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-violet-400 rounded-full animate-float" />
        <div
          className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    ),
    "interactive-card": (
      <div className="relative group max-w-sm">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-cyan-500/50 shadow-2xl shadow-cyan-500/25 p-8 transition-all duration-500">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-pulse">
              <Zap className="w-3 h-3" />
              <span>INTERACTIVE</span>
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
              Click Me
            </h3>
          </div>

          <div className="text-white/90 text-center leading-relaxed mb-6">
            Hover and click effects
          </div>

          <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              Try It Now
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </button>
        </div>

        <div className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-float" />
        <div
          className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    ),
    "stats-card": (
      <div className="relative group max-w-sm">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-emerald-500/50 shadow-2xl shadow-emerald-500/25 p-8 transition-all duration-500">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-pulse">
              <TrendingUp className="w-3 h-3" />
              <span>STATS</span>
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
              Total Users
            </h3>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-black text-white animate-fade-in">
                10,234
              </span>
            </div>
          </div>

          <div className="space-y-4 mb-8 text-white">
            {["+12% growth", "Real-time analytics", "Advanced metrics"].map(
              (feature, index) => (
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
              ),
            )}
          </div>

          <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              View Details
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </button>
        </div>
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-emerald-400 rounded-full animate-float" />
        <div
          className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-green-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-teal-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    ),
    "testimonial-card": (
      <div className="relative group max-w-sm">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-amber-500/50 shadow-2xl shadow-amber-500/25 p-8 transition-all duration-500">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-pulse">
              <Star className="w-3 h-3" />
              <span>TESTIMONIAL</span>
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
              Amazing Service!
            </h3>
          </div>

          <div className="text-white/90 text-center leading-relaxed mb-6 italic">
            &quot;This platform has completely transformed how we handle our
            workflow. Absolutely incredible!&quot;
          </div>
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-white shadow-lg bg-gradient-to-br from-blue-400 to-purple-500" />
            <div className="text-center">
              <h4 className="font-bold text-white">John Doe</h4>
              <p className="text-amber-400 text-sm">CEO</p>
            </div>
          </div>
          <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl mt-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              Read More Stories
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </button>
        </div>

        <div className="absolute -top-2 -left-2 w-2 h-2 bg-amber-400 rounded-full animate-float" />
        <div
          className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-orange-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    ),
    "pricing-card": (
      <div className="relative group max-w-sm">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-purple-500/50 shadow-2xl shadow-purple-500/25 p-8 transition-all duration-500">
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

          <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </button>
        </div>
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
        <div className="relative group max-w-sm">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-purple-500/50 shadow-2xl shadow-purple-500/25 p-8 transition-all duration-500">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-pulse">
              <Zap className="w-3 h-3" />
              <span>FEATURE</span>
              <Sparkles className="w-3 h-3" />
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
              Fast Performance
            </h3>
          </div>

          <div className="text-white/90 text-center leading-relaxed mb-6">
            Lightning fast
          </div>

          <div className="space-y-4 mb-8 text-white">
            {["Optimized code", "Instant loading", "Zero latency"].map(
              (feature, index) => (
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
              ),
            )}
          </div>

          <button className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0" />
            </span>
          </button>
        </div>
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-float" />
        <div
          className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-2 left-4 w-2.5 h-2.5 bg-rose-400 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
    ),
    "profile-card": (
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group max-w-sm">
        <div className="relative h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 bg-white rounded-full"
                style={{
                  top: `${20 + (i % 3) * 30}%`,
                  left: `${10 + Math.floor(i / 3) * 40}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative px-6 pb-6">
          <div className="absolute -top-12 left-6">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-blue-400 to-purple-500" />
          </div>

          <div className="pt-14">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Alex Smith
            </h3>
            <p className="text-purple-600 font-medium mb-4">Designer</p>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Creative designer
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600 text-sm group">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">alex@example.com</span>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social, index) => (
                <button
                  key={social.label}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    "notification-card": (
      <div className="relative rounded-2xl border p-5 shadow-lg overflow-hidden bg-emerald-50 border-emerald-200 max-w-sm">
        <div className="absolute inset-0 opacity-10">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-emerald-400 rounded-full"
              style={{
                top: `${20 + (i % 2) * 60}%`,
                left: `${10 + Math.floor(i / 2) * 80}%`,
              }}
            />
          ))}
        </div>

        <div className="flex items-start gap-4 relative z-10">
          <div className="flex-shrink-0 relative">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-100">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-emerald-900 mb-1">Success!</h4>
            <p className="text-sm text-emerald-700 leading-relaxed">
              Your changes have been saved
            </p>
          </div>
          <button className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-200/50">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-emerald-400 opacity-30" />
      </div>
    ),
    "event-card": (
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group max-w-sm">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
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

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-slate-600 text-sm group">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-medium">San Francisco</span>
            </div>

            <div className="flex items-center gap-3 text-slate-600 text-sm group">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                <Clock className="w-4 h-4" />
              </div>
              <span className="font-medium">10:00 AM - 6:00 PM</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group">
            <span>Register Now</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
              →
            </span>
          </button>
        </div>
      </div>
    ),
    "product-card": (
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group max-w-sm">
        <div className="relative">
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
            <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200" />
          </div>
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
            25% OFF
          </div>
          <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Eye className="w-4 h-4 text-slate-600" />
          </div>
          <button className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10">
            <Heart className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
            Wireless Headphones
          </h3>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <Star className="w-4 h-4 text-slate-300" />
            </div>
            <span className="text-sm text-slate-600">(4.5)</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-slate-900">$299</span>
            <span className="text-sm text-slate-500 line-through">$399</span>
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group">
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
              →
            </span>
          </button>
        </div>
      </div>
    ),
    "blog-card": (
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer max-w-sm">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            React
          </div>

          <div className="absolute top-4 right-4 flex gap-2">
            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
              <Bookmark className="w-4 h-4 text-slate-600" />
            </button>
            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
              <Share2 className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
            Getting Started with React
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Learn the basics
          </p>

          <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 group">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <User className="w-3 h-3" />
                </div>
                <span className="font-medium">John Doe</span>
              </div>

              <div className="flex items-center gap-1.5 group">
                <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <Calendar className="w-3 h-3" />
                </div>
                <span className="font-medium">Mar 1, 2024</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <Heart className="w-4 h-4" />
              <span>12</span>
            </div>

            <div className="flex items-center gap-2 text-purple-600 font-semibold group">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    ),
    "dashboard-card": (
      <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-slate-200 overflow-hidden max-w-sm group">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-100">
                <ArrowUp className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-sm font-medium text-slate-600">Revenue</h3>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">
              <TrendingUp className="w-3.5 h-3.5" />
              +12.5%
            </div>
          </div>
          <p className="text-3xl font-bold text-slate-900 mb-6">$45,231</p>
          <div className="relative">
            <div className="flex items-end gap-1.5 h-20">
              {[30, 45, 35, 50, 40, 60].map((value, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-sm"
                  style={{ height: `${(value / 60) * 100}%` }}
                />
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-200" />
          </div>

          <div className="flex items-center gap-2 mt-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              />
            ))}
          </div>
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
