import React from "react";
import { User, Calendar, Heart, Bookmark, Share2, ArrowRight } from "lucide-react";

export interface BlogCardProps {
  title?: string;
  excerpt?: string;
  author?: string;
  date?: string;
  category?: string;
  likes?: number;
  onReadMore?: () => void;
  onBookmark?: () => void;
  onShare?: () => void;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title = "Getting Started with React",
  excerpt = "Learn the basics",
  author = "John Doe",
  date = "Mar 1, 2024",
  category = "React",
  likes = 12,
  onReadMore,
  onBookmark,
  onShare,
  className = "",
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer max-w-sm ${className}`}>
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
          {category}
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            onClick={onBookmark}
          >
            <Bookmark className="w-4 h-4 text-slate-600" />
          </button>
          <button 
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            onClick={onShare}
          >
            <Share2 className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 group">
              <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                <User className="w-3 h-3" />
              </div>
              <span className="font-medium">{author}</span>
            </div>

            <div className="flex items-center gap-1.5 group">
              <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                <Calendar className="w-3 h-3" />
              </div>
              <span className="font-medium">{date}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <Heart className="w-4 h-4" />
            <span>{likes}</span>
          </div>

          <div className="flex items-center gap-2 text-purple-600 font-semibold group">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
