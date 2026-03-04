import React from "react";
import { MapPin, Clock, Calendar } from "lucide-react";

export interface EventCardProps {
  title?: string;
  date?: string;
  location?: string;
  time?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title = "Tech Conference",
  date = "Mar 15, 2024",
  location = "San Francisco",
  time = "10:00 AM - 6:00 PM",
  buttonText = "Register Now",
  onButtonClick,
  className = "",
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden group max-w-sm ${className}`}>
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-slate-900">
              {date}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-slate-600 text-sm group">
            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="font-medium">{location}</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600 text-sm group">
            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
              <Clock className="w-4 h-4" />
            </div>
            <span className="font-medium">{time}</span>
          </div>
        </div>

        <button 
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group"
          onClick={onButtonClick}
        >
          <span>{buttonText}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
