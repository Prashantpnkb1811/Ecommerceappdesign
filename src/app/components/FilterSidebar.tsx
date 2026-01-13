import { X, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export function FilterSidebar({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: FilterSidebarProps) {
  const categories = [
    { id: "all", name: "All Products", icon: "🎨" },
    { id: "anime", name: "Anime Figures", icon: "⚡" },
    { id: "pokemon", name: "Pokemon Models", icon: "🔮" },
    { id: "keychain", name: "Keychains", icon: "🔑" },
    { id: "character", name: "Character Models", icon: "🎭" },
  ];

  const materials = ["PLA", "ABS", "PETG", "Resin"];
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 h-screen bg-[#fff5ed] border-r-2 border-[#f7d1be]
          transition-transform duration-300 z-50 w-72
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b-2 border-[#f7d1be]">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-[#f7983b]" />
              <h2 className="font-semibold text-[#333333]">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="md:hidden p-1 hover:bg-[#f7d1be] rounded transition-colors"
            >
              <X className="w-5 h-5 text-[#f7983b]" />
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-3 text-[#333333]">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`
                      w-full flex items-center gap-3 p-3 rounded-lg transition-all
                      ${
                        selectedCategory === category.id
                          ? "bg-[#f7983b] text-white shadow-md"
                          : "bg-white hover:bg-[#f7d1be]/50 text-[#333333]"
                      }
                    `}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span className="flex-1 text-left">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-3 text-[#333333]">Price Range</h3>
              <div className="bg-white p-4 rounded-lg">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) =>
                    onPriceChange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full accent-[#f7983b]"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-[#666666]">$0</span>
                  <span className="text-sm font-semibold text-[#f7983b]">
                    ${priceRange[1]}
                  </span>
                </div>
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="font-semibold mb-3 text-[#333333]">Material</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <label
                    key={material}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-[#f7d1be]/30 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(material)}
                      onChange={() => toggleMaterial(material)}
                      className="w-4 h-4 accent-[#f7983b] rounded"
                    />
                    <span className="text-[#333333]">{material}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quality */}
            <div>
              <h3 className="font-semibold mb-3 text-[#333333]">Quality</h3>
              <div className="space-y-2">
                {["Standard", "High", "Ultra"].map((quality) => (
                  <button
                    key={quality}
                    className="w-full p-3 bg-white rounded-lg text-left hover:bg-[#f7d1be]/50 transition-colors text-[#333333]"
                  >
                    {quality}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reset Filters */}
          <div className="p-4 border-t-2 border-[#f7d1be]">
            <button
              onClick={() => {
                onCategoryChange("all");
                onPriceChange([0, 100]);
                setSelectedMaterials([]);
              }}
              className="w-full py-3 bg-gradient-to-r from-[#f7983b] to-[#fa6927] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
