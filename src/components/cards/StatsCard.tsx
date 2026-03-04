import React from "react";
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react";

export interface StatsCardProps {
  title?: string;
  value?: string;
  features?: string[];
  buttonText?: string;
  badgeText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title = "Total Users",
  value = "10,234",
  features = ["+12% growth", "Real-time analytics", "Advanced metrics"],
  buttonText = "View Details",
  badgeText = "STATS",
  onButtonClick,
  className = "",
}) => {
  return (
    <div className={`relative group max-w-sm ${className}`}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-emerald-500/50 shadow-2xl shadow-emerald-500/25 p-8 transition-all duration-500">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-pulse">
            <TrendingUp className="w-3 h-3" />
            <span>{badgeText}</span>
            <Sparkles className="w-3 h-3" />
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
            {title}
          </h3>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-black text-white animate-fade-in">
              {value}
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-8 text-white">
          {features.map((feature, index) => (
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

        <button 
          className="w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group bg-gradient-to-r from-white to-slate-100 text-slate-900 border-2 border-white/20 hover:scale-105 hover:shadow-2xl"
          onClick={onButtonClick}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

          <span className="relative z-10 flex items-center justify-center gap-2">
            {buttonText}
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
  );
};

export default StatsCard;
