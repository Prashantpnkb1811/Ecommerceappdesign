import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  material: string;
  onAddToCart: (id: string) => void;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  category,
  material,
  onAddToCart,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-[#f7983b]">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#f7d1be]/20">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-[#fa6927] text-[#fa6927]" : "text-[#666666]"
            }`}
          />
        </button>
        <div className="absolute top-3 left-3 px-3 py-1 bg-[#f7983b] text-white rounded-full text-xs">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-[#333333] mb-2 line-clamp-2">
          {name}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-[#f7cb3b] text-[#f7cb3b]"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="text-sm text-[#666666] ml-1">({rating}.0)</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-[#f7d1be] text-[#333333] px-2 py-1 rounded">
            {material}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#f7983b] to-[#fa6927] bg-clip-text text-transparent">
              ${price}
            </span>
          </div>
          <button
            onClick={() => onAddToCart(id)}
            className="p-3 bg-gradient-to-r from-[#f7983b] to-[#fa6927] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
