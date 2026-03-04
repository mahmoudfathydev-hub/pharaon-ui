import React from "react";
import { ArrowRight, Zap, Sparkles } from "lucide-react";

export interface InteractiveCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  badgeText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title = "Click Me",
  description = "Hover and click effects",
  buttonText = "Try It Now",
  badgeText = "INTERACTIVE",
  onButtonClick,
  className = "",
}) => {
  return (
    <div className={`relative group max-w-sm ${className}`}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-100 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative backdrop-blur-xl rounded-3xl border-2 bg-gradient-to-br from-slate-900/95 to-slate-800/95 border-cyan-500/50 shadow-2xl shadow-cyan-500/25 p-8 transition-all duration-500">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 animate-pulse">
            <Zap className="w-3 h-3" />
            <span>{badgeText}</span>
            <Sparkles className="w-3 h-3" />
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-black mb-4 text-white animate-fade-in">
            {title}
          </h3>
        </div>

        <div className="text-white/90 text-center leading-relaxed mb-6">
          {description}
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
  );
};

export default InteractiveCard;
