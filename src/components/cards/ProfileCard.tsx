import React from "react";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export interface ProfileCardProps {
  name?: string;
  role?: string;
  email?: string;
  avatar?: string;
  onSocialClick?: (platform: string) => void;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name = "Alex Smith",
  role = "Designer",
  email = "alex@example.com",
  avatar,
  onSocialClick,
  className = "",
}) => {
  const socialLinks = [
    { icon: Github, label: "GitHub" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden group max-w-sm ${className}`}>
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
            {name}
          </h3>
          <p className="text-purple-600 font-medium mb-4">{role}</p>
          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Creative designer
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-600 text-sm group">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">{email}</span>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            {socialLinks.map((social) => (
              <button
                key={social.label}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                onClick={() => onSocialClick?.(social.label)}
              >
                <social.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
