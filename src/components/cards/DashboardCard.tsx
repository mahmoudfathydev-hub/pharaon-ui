import React from "react";
import { ArrowUp, TrendingUp } from "lucide-react";

export interface DashboardCardProps {
  title?: string;
  value?: string;
  change?: string;
  changeType?: "increase" | "decrease";
  data?: number[];
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title = "Revenue",
  value = "$45,231",
  change = "+12.5%",
  changeType = "increase",
  data = [30, 45, 35, 50, 40, 60],
  className = "",
}) => {
  const changeColors = changeType === "increase" 
    ? {
        bg: "bg-emerald-100",
        text: "text-emerald-700",
        border: "border-emerald-200",
        icon: "text-emerald-600",
        bar: "from-emerald-500 to-emerald-300",
        dot: "bg-emerald-400",
      }
    : {
        bg: "bg-red-100",
        text: "text-red-700",
        border: "border-red-200",
        icon: "text-red-600",
        bar: "from-red-500 to-red-300",
        dot: "bg-red-400",
      };

  const colors = changeColors;

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg p-6 border border-slate-200 overflow-hidden max-w-sm group ${className}`}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-emerald-100">
              <ArrowUp className={`w-5 h-5 ${colors.icon}`} />
            </div>
            <h3 className="text-sm font-medium text-slate-600">{title}</h3>
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
            <TrendingUp className="w-3.5 h-3.5" />
            {change}
          </div>
        </div>
        <p className="text-3xl font-bold text-slate-900 mb-6">{value}</p>
        <div className="relative">
          <div className="flex items-end gap-1.5 h-20">
            {data.map((value, index) => (
              <div
                key={index}
                className={`flex-1 bg-gradient-to-t ${colors.bar} rounded-t-sm`}
                style={{ height: `${(value / Math.max(...data)) * 100}%` }}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-200" />
        </div>

        <div className="flex items-center gap-2 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
