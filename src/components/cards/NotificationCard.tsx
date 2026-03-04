import React from "react";
import { CheckCircle, X } from "lucide-react";

export interface NotificationCardProps {
  title?: string;
  message?: string;
  type?: "success" | "error" | "warning" | "info";
  onClose?: () => void;
  className?: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title = "Success!",
  message = "Your changes have been saved",
  type = "success",
  onClose,
  className = "",
}) => {
  const typeStyles = {
    success: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      titleColor: "text-emerald-900",
      messageColor: "text-emerald-700",
      progressBar: "bg-emerald-400",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      titleColor: "text-red-900",
      messageColor: "text-red-700",
      progressBar: "bg-red-400",
    },
    warning: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      titleColor: "text-amber-900",
      messageColor: "text-amber-700",
      progressBar: "bg-amber-400",
    },
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      titleColor: "text-blue-900",
      messageColor: "text-blue-700",
      progressBar: "bg-blue-400",
    },
  };

  const styles = typeStyles[type];

  return (
    <div className={`relative rounded-2xl border p-5 shadow-lg overflow-hidden ${styles.bg} ${styles.border} max-w-sm ${className}`}>
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
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${styles.iconBg}`}>
            <CheckCircle className={`w-5 h-5 ${styles.iconColor}`} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold ${styles.titleColor} mb-1`}>{title}</h4>
          <p className={`text-sm ${styles.messageColor} leading-relaxed`}>
            {message}
          </p>
        </div>
        <button 
          className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-200/50"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <div className={`absolute bottom-0 left-0 h-1 ${styles.progressBar} opacity-30`} />
    </div>
  );
};

export default NotificationCard;
