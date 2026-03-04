import React from "react";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";

export interface ProductCardProps {
  title?: string;
  price?: string;
  originalPrice?: string;
  discount?: string;
  rating?: number;
  ratingCount?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onQuickView?: () => void;
  onToggleFavorite?: () => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title = "Wireless Headphones",
  price = "$299",
  originalPrice = "$399",
  discount = "25% OFF",
  rating = 4.5,
  ratingCount = "(4.5)",
  buttonText = "Add to Cart",
  onButtonClick,
  onQuickView,
  onToggleFavorite,
  className = "",
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
        {hasHalfStar && <Star className="w-4 h-4 text-yellow-400" />}
        {!hasHalfStar && fullStars < 5 && <Star className="w-4 h-4 text-slate-300" />}
      </div>
    );
  };

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden group max-w-sm ${className}`}>
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
          <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200" />
        </div>
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
          {discount}
        </div>
        <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Eye className="w-4 h-4 text-slate-600" />
        </div>
        <button 
          className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
          onClick={onToggleFavorite}
        >
          <Heart className="w-4 h-4 text-slate-600" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          {renderStars(rating)}
          <span className="text-sm text-slate-600">{ratingCount}</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-slate-900">{price}</span>
          <span className="text-sm text-slate-500 line-through">{originalPrice}</span>
        </div>

        <button 
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group"
          onClick={onButtonClick}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{buttonText}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
